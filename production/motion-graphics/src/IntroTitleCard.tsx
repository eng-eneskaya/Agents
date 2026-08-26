import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {loadFont as loadDisplayFont} from '@remotion/google-fonts/BebasNeue';
import {loadFont as loadBodyFont} from '@remotion/google-fonts/Inter';

const {fontFamily: displayFont} = loadDisplayFont('normal', {
	weights: ['400'],
	subsets: ['latin', 'latin-ext'],
});
const {fontFamily: bodyFont} = loadBodyFont('normal', {
	weights: ['400', '600'],
	subsets: ['latin', 'latin-ext'],
});

export type IntroTitleCardProps = {
	kicker: string;
	title: string;
	subtitle: string;
};

const COLORS = {
	bgTop: '#03141c',
	bgBottom: '#0e4a57',
	gold: '#e3b566',
	textPrimary: '#f6efe4',
	textMuted: 'rgba(246, 239, 228, 0.72)',
	wave: 'rgba(227, 181, 102, 0.16)',
};

const riseIn = (frame: number, fps: number, delay: number) => {
	const local = Math.max(0, frame - delay);
	const progress = spring({
		frame: local,
		fps,
		config: {damping: 200, mass: 0.6, stiffness: 90},
	});
	return {
		opacity: interpolate(progress, [0, 1], [0, 1]),
		translateY: interpolate(progress, [0, 1], [24, 0]),
	};
};

const WaveLines = ({frame}: {frame: number}) => {
	const rows = [
		{y: 760, amplitude: 14, wavelength: 420, speed: 0.35, opacity: 0.5},
		{y: 830, amplitude: 10, wavelength: 300, speed: -0.22, opacity: 0.32},
		{y: 900, amplitude: 18, wavelength: 520, speed: 0.15, opacity: 0.2},
	];

	return (
		<svg
			width={1920}
			height={1080}
			style={{position: 'absolute', top: 0, left: 0}}
		>
			{rows.map((row, i) => {
				const points: string[] = [];
				const shift = frame * row.speed;
				for (let x = -40; x <= 1960; x += 20) {
					const y =
						row.y +
						Math.sin((x + shift) / (row.wavelength / (2 * Math.PI))) *
							row.amplitude;
					points.push(`${x},${y}`);
				}
				return (
					<polyline
						key={i}
						points={points.join(' ')}
						fill="none"
						stroke={COLORS.wave}
						strokeWidth={2}
						opacity={row.opacity}
					/>
				);
			})}
		</svg>
	);
};

export const IntroTitleCard: React.FC<IntroTitleCardProps> = ({
	kicker,
	title,
	subtitle,
}) => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();

	const kickerAnim = riseIn(frame, fps, 6);
	const titleAnim = riseIn(frame, fps, 16);
	const subtitleAnim = riseIn(frame, fps, 30);

	const fadeOutStart = durationInFrames - 18;
	const outOpacity = interpolate(
		frame,
		[fadeOutStart, durationInFrames - 1],
		[1, 0],
		{extrapolateLeft: 'clamp', extrapolateRight: 'clamp'},
	);

	const glowX = interpolate(frame, [0, durationInFrames], [30, 70]);

	return (
		<AbsoluteFill
			style={{
				background: `linear-gradient(180deg, ${COLORS.bgTop} 0%, ${COLORS.bgBottom} 100%)`,
				opacity: outOpacity,
			}}
		>
			<AbsoluteFill
				style={{
					background: `radial-gradient(circle at ${glowX}% 20%, rgba(227,181,102,0.14), transparent 55%)`,
				}}
			/>

			<WaveLines frame={frame} />

			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<div
					style={{
						fontFamily: bodyFont,
						fontSize: 30,
						letterSpacing: 10,
						fontWeight: 600,
						color: COLORS.gold,
						textTransform: 'uppercase',
						opacity: kickerAnim.opacity,
						transform: `translateY(${kickerAnim.translateY}px)`,
						marginBottom: 18,
					}}
				>
					{kicker}
				</div>

				<div
					style={{
						fontFamily: displayFont,
						fontSize: 190,
						lineHeight: 1,
						color: COLORS.textPrimary,
						letterSpacing: 6,
						textTransform: 'uppercase',
						opacity: titleAnim.opacity,
						transform: `translateY(${titleAnim.translateY}px)`,
					}}
				>
					{title}
				</div>

				<div
					style={{
						fontFamily: bodyFont,
						fontSize: 34,
						fontWeight: 400,
						color: COLORS.textMuted,
						marginTop: 22,
						opacity: subtitleAnim.opacity,
						transform: `translateY(${subtitleAnim.translateY}px)`,
					}}
				>
					{subtitle}
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
