import React, {useRef} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, Text, Box} from '@react-three/drei'

//Component for a simple rotating box
function RotatingTechStack(props) {
    const groupRef = useRef();
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.x += 0.01;
            groupRef.current.rotation.y += 0.003;
        }
    });
    return (
        <group {...props} ref={groupRef}>
            {/* Base of the laptop/server - Made larger*/}
            <Box args={[2.5, 0.2, 1.8]} position={[0, -0.3, 0]}>
                <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.3}/>
            </Box>
            {/* Screen/Top layer - slightly tilted */}
            <Box args={[2.4, 1.5, 0.15]} position={[0, 0.7, -0.8]} rotation-x={Math.PI / 10}>
                <meshStandardMaterial color="#000000" metalness={0.1} roughness={0.8}/>
            </Box>
            {/* Small accent/button/keyboard*/}
            <Box args={[1.8, 0.1, 0.8]} position={[0, -0.2, 0.5]}>
                <meshStandardMaterial color="#555555" metalness={0.7} roughness={0.4}/>
            </Box>
        </group>
        
    )
}


//Main 3D scene component
function MyPortfolioScene() {
    return (
        <>
          {/* Lighting for the scene */}
          <ambientLight intensity={0.5}/>
          <pointLight position={[10, 10, 10]}/>
          <directionalLight position={[-10, 10, 5]} intensity={1}/>

          <Text
            position={[0, 4.0 , 0]}
            fontSize={0.8}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={5}
          >
            UZRA KHAN
          </Text>

          {/* Tagline */}
          <Text
            position={[0, 3.2, 0]}
            fontSize={0.3}
            color="lightgray"
            anchorX="center"
            anchorY="middle"
            maxWidth={6}
          >
            Full-Stack Developer
          </Text>

          {/* SKILLS HEADING */}
          <Text
            position={[0, 2.3, 0]}
            fontSize={0.5}
            color="lightgreen"
            anchorX="center"
            anchorY="middle"
          >
            SKILLS
          </Text>

          {/* Key Skill 1: React & TypeScript */}
          <Text
            position={[-2.8, 1.5, 0]}
            fontSize={0.4}
            color="lightblue"
            anchorX="center"
            anchorY="middle"
            maxWidth={4}
          >
            React & TypeScript
          </Text>

          {/* Key Skill 2: Node.js & MongoDB */}
          <Text
            position={[2.8, 1.5, 0]}
            fontSize={0.4}
            color="lightgreen"
            anchorX="center"
            anchorY="middle"
            maxWidth={4}
          >
            Node.js & MongoDB
          </Text>

          {/* Key Skill 3: Socket.io */}
          <Text
            position={[0, 0.7, 0]}
            fontSize={0.4}
            color="orange"
            anchorX="center"
            anchorY="middle"
            maxWidth={4}
          >
            Socket.io
          </Text>

          {/* PROJECTS HEADING */}
          <Text
            position={[0, -0.5, 0]}
            fontSize={0.5}
            color="lightgreen"
            anchorX="center"
            anchorY="middle"
          >
            PROJECTS
          </Text>

          {/* Project 1: IdeaBoard */}
          <Text
            position={[-3.0, -1.8, 0]}
            fontSize={0.35}
            color="yellow"
            anchorX="center"
            anchorY="middle"
            maxWidth={5}
          >
            IdeaBoard
          </Text>
          {/* Project 1 Description */}
          <Text
            position={[-3.0, -2.3, 0]}
            fontSize={0.25}
            color="gray"
            anchorX="center"
            anchorY="middle"
            maxWidth={4}
           >
            Real-time sync with Socket.io
          </Text>

          {/* Project 2: Tomato Food App */}
          <Text
            position={[0, -3.2, 0]}
            fontSize={0.35}
            color="cyan"
            anchorX="center"
            anchorY="middle"
            maxWidth={5}
          >
            Tomato Food App
          </Text>
        
          {/* Project 2 Description */}
          <Text
            position={[0, -3.7, 0]}
            fontSize={0.25}
            color="gray"
            anchorX="center"
            anchorY="middle"
            maxWidth={4}
          >
            Firebase Auth & protected routes
          </Text>

          {/* Project 3: PokeFinder */}
          <Text
            position={[3.0, -1.8, 0]}
            fontSize={0.35}
            color="red"
            anchorX="center"
            anchorY="middle"
            maxWidth={5}
          >
            PokeFinder
          </Text>

          {/* Project 3 Description */}
          <Text
            position={[3.0, -2.3, 0]}
            fontSize={0.25}
            color="gray"
            anchorX="center"
            anchorY="middle"
            maxWidth={4}
          >
           150+ Pokémon with search & filters
          </Text>

          {/* Stylized rotating tech stack - position adjustement */}
          <RotatingTechStack position={[0, -6.0, 0]}/>
          
          {/* Orbital Controls to allow user to drag and zoom the scene */}
          <OrbitControls />
        </>
    )
}

const Home = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#1a1a1a', overflow: 'hidden' }}>
        <Canvas camera={{ position: [0, 0, 7], fov: 80 }}>
            <MyPortfolioScene />
        </Canvas>
    </div>
  )
}

export default Home