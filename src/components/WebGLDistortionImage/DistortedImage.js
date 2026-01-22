import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uIntensity;

  void main() {
    vUv = uv;

    vec3 pos = position;

    float dist = distance(uv, uMouse);
    float ripple = sin(dist * 12.0 - uTime * 3.0) * exp(-dist * 3.0);

    pos.z += ripple * 0.15 * uIntensity;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D uTexture;
  uniform float uBrightness;
  uniform float uContrast;

  void main() {
    vec4 color = texture2D(uTexture, vUv);

    // Apply brightness and contrast for dark mode
    color.rgb = (color.rgb - 0.5) * uContrast + 0.5 + uBrightness;

    gl_FragColor = color;
  }
`;

export default function DistortedImage({ url, isDark = false }) {
  const meshRef = useRef();
  const texture = useTexture(url);

  const uniforms = useRef({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uIntensity: { value: 0 },
    uTexture: { value: texture },
    uBrightness: { value: isDark ? -0.1 : 0.0 },
    uContrast: { value: isDark ? 1.1 : 1.0 },
  });

  // Update theme uniforms when isDark changes
  if (uniforms.current) {
    uniforms.current.uBrightness.value = isDark ? -0.1 : 0.0;
    uniforms.current.uContrast.value = isDark ? 1.1 : 1.0;
  }

  useFrame((state, delta) => {
    uniforms.current.uTime.value += delta;
    uniforms.current.uIntensity.value = THREE.MathUtils.lerp(
      uniforms.current.uIntensity.value,
      0,
      0.1
    );
  });

  return (
    <mesh
      ref={meshRef}
      onPointerMove={(e) => {
        if (e.uv) {
          uniforms.current.uMouse.value.set(e.uv.x, e.uv.y);
          uniforms.current.uIntensity.value = 1;
        }
      }}
      onPointerOut={() => {
        uniforms.current.uIntensity.value = 0;
      }}
    >
      <planeGeometry args={[2, 2, 32, 32]} />
      <shaderMaterial
        uniforms={uniforms.current}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}
