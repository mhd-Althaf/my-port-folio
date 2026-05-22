import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei'
import { useMediaQuery, usePrefersReducedMotion } from '../../hooks/useMediaQuery'

function FloatingShapes({ mouse }) {
  const group = useRef()

  useFrame((state) => {
    if (!group.current) return
    const t = state.clock.elapsedTime
    group.current.rotation.y = t * 0.04 + mouse.x * 0.2
    group.current.rotation.x = mouse.y * 0.12
  })

  return (
    <group ref={group}>
      <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.6}>
        <mesh position={[-1.2, 0.3, 0]}>
          <icosahedronGeometry args={[0.55, 1]} />
          <MeshDistortMaterial
            color="#22d3ee"
            emissive="#0891b2"
            emissiveIntensity={0.4}
            distort={0.35}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>
      <Float speed={0.9} rotationIntensity={0.25} floatIntensity={0.45}>
        <mesh position={[1.4, -0.2, -0.5]}>
          <torusKnotGeometry args={[0.35, 0.1, 128, 16]} />
          <meshStandardMaterial color="#a78bfa" emissive="#7c3aed" emissiveIntensity={0.3} metalness={0.7} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        <mesh position={[0.2, 0.8, -0.8]}>
          <octahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#f472b6" emissive="#db2777" emissiveIntensity={0.25} wireframe />
        </mesh>
      </Float>
    </group>
  )
}

function Particles({ count = 400 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.008
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#67e8f9" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function SceneContent({ mouse }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#e0f2fe" />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#a78bfa" />
      <FloatingShapes mouse={mouse} />
      <Particles count={180} />
      <Stars radius={80} depth={40} count={600} factor={2.5} saturation={0} fade speed={0.25} />
    </>
  )
}

export default function HeroScene({ mouse = { x: 0, y: 0 } }) {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const prefersReduced = usePrefersReducedMotion()

  if (prefersReduced) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-transparent to-violet-950/30" aria-hidden />
    )
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: isMobile ? 55 : 45 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  )
}
