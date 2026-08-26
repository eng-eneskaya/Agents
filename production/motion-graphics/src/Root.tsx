import React from 'react';
import {Composition} from 'remotion';
import {FishermanIntro} from './FishermanIntro';

export const Root: React.FC = () => {
	return (
		<>
			<Composition
				id="FishermanIntro"
				component={FishermanIntro}
				durationInFrames={120}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
