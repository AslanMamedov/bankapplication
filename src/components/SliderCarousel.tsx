'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import { Box } from '@mui/material';
import { useMemo, useRef } from 'react';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
export const SliderCarousel = () => {
	const sliderRef = useRef<Slider | undefined | any>(undefined);
	const settings: Settings = useMemo(() => {
		return {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		};
	}, []);
	const prevArrowHandler = () => {
		sliderRef?.current?.slickPrev();
	};
	const nextArrowHandler = () => {
		sliderRef?.current?.slickNext();
	};
	return (
		<Box>
			<button onClick={prevArrowHandler}>
				<ArrowBackIosRoundedIcon />
			</button>
			<button onClick={nextArrowHandler}>
				<ArrowBackIosRoundedIcon />
			</button>
			<Slider {...settings} ref={sliderRef}>
				<Box
					sx={{
						height: '540px',
					}}
				>
					<img src="https://www.bankrespublika.az/uploads/Biznese%20serfeli_slide.png" />
				</Box>
				<Box
					sx={{
						height: '540px',
					}}
				>
					<img src="https://www.bankrespublika.az/uploads/qaygisiz-yay_slide.png" />
				</Box>
			</Slider>
		</Box>
	);
};
