import { useEffect, useRef } from 'react'

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Particle configuration
    const particles = []
    const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))
    const colors = ['#22C55E', '#38BDF8', '#7C3AED', '#06B6D4']

    // Create particles
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.r = Math.random() * 2 + 0.5
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.alpha = Math.random() * 0.5 + 0.3
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        // Bounce off walls
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1

        // Keep in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x))
        this.y = Math.max(0, Math.min(canvas.height, this.y))
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.alpha
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Draw connection lines
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            ctx.strokeStyle = particles[i].color
            ctx.globalAlpha = 0.1 * (1 - dist / 150)
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      // Draw connections
      drawConnections()

      requestAnimationFrame(animate)
    }

    // Handle resize
    const handleResize = () => {
      setCanvasSize()
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}

export default ParticleBackground
