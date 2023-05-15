'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import { Box, Container } from '@mui/material';
import { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

type TSliderItem = {
	imgsrc: string;
	bgcolor: string;
	title: string;
	subTitle: string;
	link: string;
};

interface ISliderCarouselProps {
	sliderLists: TSliderItem[];
}

const SliderCarousel: FC<ISliderCarouselProps> = ({ sliderLists = [] }) => {
	const [progress, setProgress] = useState<number>(0);
	const [activeSlide, setActiveSlide] = useState<number>(0);
	const sliderRef = useRef<Slider | undefined | any>(undefined);
	const settings: Settings = useMemo(() => {
		return {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			centerMode: false,
			autoplay: false,
		};
	}, []);

	const clickSlideHandler = (index: number) => sliderRef?.current.slickGoTo(index);

	const prevArrowHandler = () => {
		sliderRef?.current?.slickPrev();
	};
	const nextArrowHandler = () => {
		sliderRef?.current?.slickNext();
	};
	const handleBeforeChange = (currentSlide: number, nextSlide: number) => {
		setActiveSlide(nextSlide);
		setProgress(0);
	};

	const handleAfterChange = (currentSlide: number) => {
		if (currentSlide === sliderLists.length) {
			setActiveSlide(0);
		}
	};

	useEffect(() => {
		const id = setInterval(() => {
			sliderRef?.current?.slickNext();
		}, 4000);

		return () => clearInterval(id);
	}, []);

	useEffect(() => {
		const id = setInterval(() => {
			setProgress((prevProgress) => (prevProgress === 100 ? 0 : prevProgress + 0.1));
		}, 4000 / 1000);

		return () => clearInterval(id);
	}, []);

	return (
		<Box
			component={'div'}
			sx={{
				position: 'relative',
				height: '100%',
			}}
		>
			<Container
				className="dots__container"
				sx={{
					width: '100%',
				}}
				maxWidth="lg"
			>
				<Box
					component={'div'}
					sx={{
						position: 'absolute',
						top: '10px',
						left: '50%',
						transform: 'translateX(-50%)',
						zIndex: '11111',
						width: '100%',
						maxWidth: '1200px',
						display: 'grid',
						gap: '20px',
						gridTemplateColumns: 'repeat(auto, 1fr)',
						gridAutoFlow: 'column',
						gridAutoColumns: '1fr',
					}}
				>
					{!!sliderLists.length &&
						sliderLists.map((_, index) => (
							<Box
								onClick={() => clickSlideHandler(index)}
								key={index}
								component={'div'}
								sx={{
									zIndex: '11111',
									background: 'rgba(175, 175, 175, 0.5)',
									borderRadius: '10px',
									height: '2.5px',
									cursor: 'pointer',
									overflow: 'hidden',
									transition: 'all .1 ease-in-out',
									'&:hover': {
										bgcolor: '#ffff',
									},
								}}
							>
								<Box
									component={'span'}
									sx={{
										display: 'block',
										bgcolor: '#ffff',
										cursor: 'pointer',
										width: `${index === activeSlide ? progress : 0}%`,
										height: '100%',
										transition: 'all .1 ease-in-out',
									}}
								/>
							</Box>
						))}
				</Box>
			</Container>

			<Container
				sx={{
					position: 'absolute',
					top: '50%',
					zIndex: '11111',
					left: '50%',
					transform: 'translate(-50%, -50%)',
				}}
			>
				<Box
					component={'button'}
					sx={{
						background: 'transparent',
						position: 'absolute',
						top: '50%',
						left: '0',
						zIndex: '11111',
						transform: 'translateY(-50%)',
					}}
					onClick={prevArrowHandler}
				>
					<ArrowBackIosRoundedIcon
						sx={{
							color: 'white',
							fontSize: '40px',
						}}
					/>
				</Box>
				<Box
					component={'button'}
					sx={{
						rotate: '-180deg',
						background: 'transparent',
						position: 'absolute',
						top: '50%',
						right: '0',
						zIndex: '11111',
						transform: 'translateY(50%)',
					}}
					onClick={nextArrowHandler}
				>
					<ArrowBackIosRoundedIcon
						sx={{
							color: 'white',
							fontSize: '40px',
						}}
					/>
				</Box>
			</Container>
			<Slider {...settings} ref={sliderRef} beforeChange={handleBeforeChange} afterChange={handleAfterChange}>
				{!!sliderLists.length &&
					sliderLists.map(({ imgsrc, bgcolor, link, subTitle, title }, index) => (
						<Box
							key={index}
							sx={{
								position: 'relative',
								height: '540px',
								width: '100%',

								bgcolor,
							}}
						>
							<Container
								maxWidth="lg"
								sx={{
									height: '540px',
									width: '100%',
								}}
							>
								<Box
									component={'img'}
									src={imgsrc}
									sx={
										{
											// background: `${imgsrc}`,
											// position: 'absolute',
											// right: '10px',
										}
									}
								/>
							</Container>
						</Box>
					))}
			</Slider>
		</Box>
	);
};
export default memo(SliderCarousel);
