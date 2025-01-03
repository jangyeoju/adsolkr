import * as React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import theme from '@/style/theme';

export default function BasicModal({
  handleClose,
  open,
  text,
  description,
  img,
  detailImages,
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <React.Fragment>
      <StyledDialog
        open={open}
        onClose={handleClose}
        fullScreen={fullScreen}
        className="flex justify-center"
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitleWrap>
          <IconButton></IconButton>
          <DialogTitle id="responsive-dialog-title" className="truncate">
            {text}
          </DialogTitle>
          <IconButton onClick={handleClose} autoFocus>
            <CloseIcon />
          </IconButton>
        </DialogTitleWrap>
        <StyledDialogContent className="w-full sm:w-[600px]">
          <div className="img-box">
            <Image src={img} alt={text} width={600} height={400} />
          </div>
          {/* 상세이미지 */}
          <div className="img-box">
            {detailImages.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={text}
                width={600}
                height={400}
              />
            ))}
          </div>
          <div className="text-box">
            {/**상세 설명 */}
            <p>{description}</p>
          </div>
        </StyledDialogContent>
      </StyledDialog>
    </React.Fragment>
  );
}

const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    width: 60rem;
    border-radius: 8px;
  }
  @media ${() => theme.device.tablet} {
    .MuiPaper-root {
      min-width: 30rem;
    }
  }
  @media ${() => theme.device.mobile3} {
    .MuiPaper-root {
      min-width: 100%;
      border-radius: 0 !important;
    }
  }
`;

const DialogTitleWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h2 {
    padding: 0;
    font-size: 1.8rem;
  }
  button {
    width: 3rem;
    height: 3rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  }
  @media ${() => theme.device.mobile} {
    h2 {
      font-size: 1.4rem;
    }
  }
`;

const StyledDialogContent = styled(DialogContent)`
  height: 55rem;
  max-height: 70rem;
  overflow-y: scroll;
  padding: 2rem;
  font-size: 1.6rem;
  color: #888888;
  line-height: 150%;

  .img-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    img {
      width: 100%;
    }
  }
  .img-box:first-of-type {
    margin-top: 0;
  }
  .text-box {
    margin-top: 2rem;
    p {
      font-size: 1.6rem;
      color: #888888;
      font-weight: 400;
      line-height: 150%;
    }
  }
  @media ${() => theme.device.mobile} {
    max-height: 100% !important;
    .img-box {
      img {
        width: 100%;
      }
    }
  }
`;
