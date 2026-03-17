import { useEffect, useRef } from 'react'

export default function FallingPetals() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let petals = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    // Petal colours — various shades of green, very low opacity
    const colors = [
      'rgba(45, 106, 79, 0.18)',
      'rgba(52, 168, 83, 0.14)',
      'rgba(27, 67, 50, 0.16)',
      'rgba(74, 160, 94, 0.12)',
      'rgba(30, 95, 74, 0.15)',
      'rgba(86, 130, 89, 0.13)',
    ]

    // How many petals — fewer on mobile
    const petalCount = window.innerWidth < 640 ? 0 : window.innerWidth < 1024 ? 8 : 18

    // Petal class
    class Petal {
      constructor() {
        this.reset(true)
      }

      reset(initial = false) {
        this.x = Math.random() * canvas.width
        this.y = initial ? Math.random() * canvas.height : -20
        this.size = Math.random() * 10 + 7        // 7–17px
        this.speedY = Math.random() * 0.6 + 0.3   // very slow fall
        this.speedX = Math.random() * 0.4 - 0.2   // gentle sideways drift
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.012
        this.opacity = Math.random() * 0.18 + 0.06 // 6–24% opacity max
        this.wobble = Math.random() * Math.PI * 2
        this.wobbleSpeed = Math.random() * 0.018 + 0.008
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.scaleX = 1
        this.scaleXDir = (Math.random() - 0.5) * 0.008
      }

      update() {
        this.y += this.speedY
        this.wobble += this.wobbleSpeed
        this.x += this.speedX + Math.sin(this.wobble) * 0.5
        this.rotation += this.rotationSpeed
        this.scaleX += this.scaleXDir
        if (this.scaleX > 1 || this.scaleX < 0.3) this.scaleXDir *= -1

        if (this.y > canvas.height + 30) this.reset()
        if (this.x < -30) this.x = canvas.width + 20
        if (this.x > canvas.width + 30) this.x = -20
      }

      draw() {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.scale(this.scaleX, 1)
        ctx.globalAlpha = this.opacity

        // Draw a petal shape — oval with pointed ends
        ctx.beginPath()
        ctx.fillStyle = this.color

        // Simple petal: ellipse with slight point
        const w = this.size * 0.5
        const h = this.size
        ctx.beginPath()
        ctx.moveTo(0, -h)
        ctx.bezierCurveTo(w, -h * 0.5, w, h * 0.5, 0, h)
        ctx.bezierCurveTo(-w, h * 0.5, -w, -h * 0.5, 0, -h)
        ctx.closePath()
        ctx.fill()

        // Subtle centre vein line
        ctx.beginPath()
        ctx.strokeStyle = 'rgba(27, 67, 50, 0.15)'
        ctx.lineWidth = 0.5
        ctx.moveTo(0, -h * 0.8)
        ctx.lineTo(0, h * 0.8)
        ctx.stroke()

        ctx.restore()
      }
    }

    // Initialise petals
    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      petals.forEach(p => {
        p.update()
        p.draw()
      })
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',   // never blocks clicks or scrolling
        zIndex: 0,               // behind everything
        opacity: 1,
      }}
    />
  )
}
