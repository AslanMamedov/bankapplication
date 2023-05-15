'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Box, Container } from '@mui/material';
import { FC, MouseEventHandler, memo, useEffect, useRef, useState } from 'react';
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
	const sliderRef = useRef<Slider | undefined | any>(undefined);
	const [progress, setProgress] = useState<number>(0);
	const [activeSlide, setActiveSlide] = useState<number>(0);
	const [hover, setHover] = useState<boolean>(false);
	const clickSlideHandler = (index: number) => {
		sliderRef?.current.slickGoTo(index);
	};

	const prevArrowHandler = () => {
		sliderRef?.current?.slickPrev();
	};
	const nextArrowHandler = () => {
		sliderRef?.current?.slickNext();
	};

	const handleBeforeChange = (currentSlide: number, nextSlide: number) => {
		if (currentSlide !== activeSlide) {
			setProgress(0);
		}
	};
	const handleAfterChange = (currentSlide: number) => {
		setProgress(0);
		setActiveSlide(currentSlide);
	};

	const onMouseEnterHandler: MouseEventHandler<HTMLDivElement> = (e) => {
		setHover(true);
	};
	const onMouseLeaveHandler: MouseEventHandler<HTMLDivElement> = (e) => {
		setHover(false);
	};

	useEffect(() => {
		if (hover) {
			return;
		}
		const id = setInterval(() => {
			setProgress((prevProgress) => {
				if (+prevProgress.toFixed(0) === 100) {
					clearInterval(id);
					return 100;
				}
				return prevProgress + 0.1;
			});
		}, 1);

		return () => {
			clearInterval(id);
		};
	}, [activeSlide, hover]);

	useEffect(() => {
		if (hover) {
			return;
		}
		const id = setInterval(() => {
			if (+progress.toFixed(0) !== 100) {
				clearInterval(id);
			} else {
				sliderRef?.current?.slickNext();
			}
		}, 100);
		return () => {
			clearInterval(id);
		};
	}, [progress, hover]);
	return (
		<Box
			onMouseEnter={onMouseEnterHandler}
			onMouseLeave={onMouseLeaveHandler}
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
			<Slider
				{...{
					dots: false,
					infinite: true,
					speed: 500,
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					centerMode: false,
					autoplay: false,
				}}
				ref={sliderRef}
				beforeChange={handleBeforeChange}
				afterChange={handleAfterChange}
			>
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
