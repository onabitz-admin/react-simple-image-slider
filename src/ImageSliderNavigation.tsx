import React from 'react';
import styles from './ImageSliderStyle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export enum ImageSliderNavStyle {
  NORMAL = 1,
  BOLD = 2
}

export enum ImageSliderNavDirection {
  LEFT = 'left',
  RIGHT = 'right'
}

type ImageSliderNavigationProps = {
  type: ImageSliderNavStyle;
  size: number;
  margin: number;
  direction: ImageSliderNavDirection;
  visible: boolean;
  onClickNav: (direction: ImageSliderNavDirection) => (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  color: string;
};

const ImageSliderNavigation: React.FC<ImageSliderNavigationProps> = (props: ImageSliderNavigationProps) => {
  return (
    <>
      {props.visible && (
        <button type="button" style={styles.getNavStyle(props.direction, props.size, props.margin)} onClick={props.onClickNav(props.direction)}>
          {props.direction === ImageSliderNavDirection.RIGHT ? (
            <ArrowForwardIosIcon fontSize={'large'} style={{ color: props.color }} />
          ) : (
            <ArrowBackIosIcon fontSize={'large'} style={{ color: props.color }} />
          )}
        </button>
      )}
    </>
  );
};

export default ImageSliderNavigation;
