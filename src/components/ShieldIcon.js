import React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop, Circle } from 'react-native-svg';

export default function ShieldIcon({ size = 90 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 90 100">
      <Defs>
        <LinearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#F5F5F5" />
          <Stop offset="30%" stopColor="#D4D4D4" />
          <Stop offset="60%" stopColor="#B0B0B0" />
          <Stop offset="100%" stopColor="#909090" />
        </LinearGradient>
        <LinearGradient id="innerGrad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#E8E8E8" />
          <Stop offset="100%" stopColor="#A0A0A0" />
        </LinearGradient>
      </Defs>
      <Path
        d="M45 3 L82 17 L82 48 C82 72 45 97 45 97 C45 97 8 72 8 48 L8 17 Z"
        fill="url(#shieldGrad)"
        stroke="#7A7A7A"
        strokeWidth="1.5"
      />
      <Path
        d="M45 10 L75 22 L75 48 C75 68 45 90 45 90 C45 90 15 68 15 48 L15 22 Z"
        fill="url(#innerGrad)"
        stroke="#8A8A8A"
        strokeWidth="0.5"
      />
      <Path
        d="M45 28 L60 36 L60 55 C60 63 45 72 45 72 C45 72 30 63 30 55 L30 36 Z"
        fill="none"
        stroke="#6B6B6B"
        strokeWidth="1"
      />
      <Circle cx="18" cy="24" r="3" fill="#D8D8D8" stroke="#7A7A7A" strokeWidth="0.8" />
      <Circle cx="72" cy="24" r="3" fill="#D8D8D8" stroke="#7A7A7A" strokeWidth="0.8" />
      <Circle cx="18" cy="56" r="3" fill="#D8D8D8" stroke="#7A7A7A" strokeWidth="0.8" />
      <Circle cx="72" cy="56" r="3" fill="#D8D8D8" stroke="#7A7A7A" strokeWidth="0.8" />
      <Circle cx="18" cy="24" r="1.2" fill="#A0A0A0" />
      <Circle cx="72" cy="24" r="1.2" fill="#A0A0A0" />
      <Circle cx="18" cy="56" r="1.2" fill="#A0A0A0" />
      <Circle cx="72" cy="56" r="1.2" fill="#A0A0A0" />
    </Svg>
  );
}
