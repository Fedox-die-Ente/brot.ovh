"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import * as THREE from "three"

// @ts-ignore
const BoxWithEdges = ({ position }) => {
	return (
		<group position={position}>
			<mesh>
				<boxGeometry args={[0.5, 0.5, 0.5]} />
				<meshPhysicalMaterial
					color="#9e17d4"
					roughness={0.3}
					metalness={0.2}
					transparent={true}
					opacity={0.9}
					transmission={0.2}
					clearcoat={0.5}
				/>
			</mesh>
			<lineSegments>
				<edgesGeometry args={[new THREE.BoxGeometry(0.5, 0.5, 0.5)]} />
				<lineBasicMaterial color="#4d138b" linewidth={2} />
			</lineSegments>
		</group>
	)
}

// @ts-ignore
const BoxLetter = ({ letter, position }) => {
	const getLetterShape = (letter: string | number) => {
		const shapes = {
			B: [
				[1, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 1, 1, 0],
			],
			R: [
				[1, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 1, 1, 0],
				[1, 0, 1, 0],
				[1, 0, 0, 1],
			],
			O: [
				[0, 1, 1, 0],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[1, 0, 0, 1],
				[0, 1, 1, 0],
			],
			T: [
				[1, 1, 1],
				[0, 1, 0],
				[0, 1, 0],
				[0, 1, 0],
				[0, 1, 0],
			],
		}
		// @ts-ignore
		return shapes[letter] || shapes["B"]
	}

	const letterShape = getLetterShape(letter)

	return (
		<group position={position}>
			{letterShape.map((row: any[], i: number) =>
				row.map((cell: any, j: number) => {
					if (cell) {
						const xOffset = j * 0.5 - (letter === "T" ? 0.5 : letter === "O" ? 0.75 : 0.75)
						return <BoxWithEdges key={`${i}-${j}`} position={[xOffset, (4 - i) * 0.5 - 1, 0]} />
					}
					return null
				}),
			)}
		</group>
	)
}

const AnimatedStars = () => {
	return (
			<group>
				<Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
			</group>
	)
}

const Scene = () => {

	// @ts-ignore
	return (
		<>
			<color attach="background" args={["#000008"]} />
			<AnimatedStars />
			<group position={[-0.5, 0, 0]} rotation={[0, Math.PI / 1.5, 0]}>
				<BoxLetter letter="B" position={[-3.75, 0, 0]} />
				<BoxLetter letter="R" position={[-1.25, 0, 0]} />
				<BoxLetter letter="O" position={[1.25, 0, 0]} />
				<BoxLetter letter="T" position={[3.75, 0, 0]} />
			</group>
			<OrbitControls
				enableZoom
				enablePan
				enableRotate
				autoRotate
				autoRotateSpeed={2}
				rotation={[Math.PI, 0, 0]}
			/>

			<ambientLight intensity={0.5} />
			<directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
		</>
	)
}

export default function Component() {
	return (
		<div className="w-full h-screen bg-black">
			<Canvas camera={{ position: [10.047021, -0.127436, -11.137374], fov: 50 }}>
				<Scene />
			</Canvas>
		</div>
	)
}

