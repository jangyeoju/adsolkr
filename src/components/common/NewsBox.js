import Image from 'next/image';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Add } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import { useArticlesContext } from '@/contexts/ArticlesContext';
import theme from '@/style/theme';

import { Button } from '../ui/Button';

export default function NewsBox({ id, img, title, onClick, edit }) {
  const { removeArticle } = useArticlesContext();

  return (
    <NewsBoxWrap>
      <label className="news-box" onClick={onClick}>
        <div className="news-img">
          <Image
            src={img}
            alt={title}
            fill
            priority
            sizes={300}
            className="size-full object-cover"
          />
        </div>
        <div className="news-title overflow-hidden">
          <h3 className="truncate">{title}</h3>
          <IconButton>
            <Add />
          </IconButton>
        </div>
      </label>
      {edit ? (
        <div className="flex justify-end gap-2">
          <Link href={`/news/admin/upload/${id}`}>
            <Button size="sm">수정</Button>
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" size="sm">
                삭제
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>게시물을 삭제하시겠습니까?</DialogTitle>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="secondary" size="sm">
                    취소
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeArticle(id)}
                  >
                    삭제
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ) : null}
    </NewsBoxWrap>
  );
}

const NewsBoxWrap = styled(Box)`
  .news-box {
    cursor: pointer;

    .news-img {
      border: 1px solid rgba(0, 0, 0, 0.1);
      width: 100%;
      margin-bottom: 1.5rem;
      border-radius: 16px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      aspect-ratio: 3/2;
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
    .news-box {
      .news-img {
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
