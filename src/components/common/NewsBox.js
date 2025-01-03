import styled from '@emotion/styled';
import { Add } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  createTheme,
  Divider,
  Icon,
  IconButton,
  ThemeProvider,
} from '@mui/material';

import theme from '@/app/style/theme';

export default function NewsBox({ img, title, handle, edit }) {
  return (
    <NewsBoxWrap>
      <div className="news-box" onClick={handle}>
        <div className="news-img">
          <div className="news-img-inner"></div>
          <img src={img} alt={title} />
        </div>
        <div className="news-title">
          <h3>{title}</h3>
          <IconButton>
            <Add />
          </IconButton>
        </div>
      </div>
      {edit ? (
        <div className="btn-wrap">
          <Button variant="contained" color="primary" href="/news/admin/upload">
            수정
          </Button>
          <Button variant="contained" color="error">
            삭제
          </Button>
        </div>
      ) : (
        <></>
      )}
    </NewsBoxWrap>
  );
}

const NewsBoxWrap = styled(Box)`
  width: 32%;
  margin-bottom: 2rem;
  .news-box {
    .news-img {
      border: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
      height: 200px;
      margin-bottom: 1.5rem;
      border-radius: 16px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        transition: all 0.3s ease-in-out;
      }
      .news-img-inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background: rgb(255, 255, 255);
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(34, 40, 47, 0.4) 100%
        );
        transition: all 0.3s ease-in-out;
      }
    }
    .news-img:hover {
      img {
        transform: scale(1.05);
        transition: all 0.3s ease-in-out;
      }
      .news-img-inner {
        opacity: 0;
      }
    }
    .news-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        font-size: 1.8rem;
        color: ${() => theme.colors.textColor};
        font-weight: 500;
        font-family: 'Pretendard-Bold';
      }
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
  .btn-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1rem;
    button {
      font-size: 1.2rem;
      font-weight: 400;
      font-family: 'Pretendard-Bold';
    }
    a {
      background-color: ${() => theme.colors.primary2};
      font-size: 1.2rem;
      font-weight: 400;
      font-family: 'Pretendard-Bold';
    }
  }
  @media ${() => theme.device.mobile} {
    width: 48%;
    .news-box {
      .news-img {
        height: 130px;
        margin-bottom: 1rem;
      }
      .news-title {
        h3 {
          font-size: 1.6rem;
        }
      }
    }
  }
`;
