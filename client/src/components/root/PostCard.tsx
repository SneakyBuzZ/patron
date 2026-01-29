import { Ellipsis, Gift, Heart, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { useEffect, useState } from 'react';
import { useGeneratePresignedUrl } from '@/lib/query/query';

interface PostCardProps {
  key: string;
  image: string;
  description: string;
  avatar: string;
  address: string;
}

const PostCard = ({ image, description, avatar, address, key }: PostCardProps) => {
  const { mutateAsync: generatePresignedUrl } = useGeneratePresignedUrl();
  const [imagePreSignedUrl, setImagePreSignedUrl] = useState('');

  useEffect(() => {
    if (!image) {
      return;
    }
    generatePresignedUrl(image).then((response) => {
      setImagePreSignedUrl(response);
    });
  }, []);

  return (
    <>
      <li
        key={key}
        className="border flex flex-col justify-start items-start rounded-md w-full h-[37rem] bg-neutral-800/20"
      >
        <div className="flex h-full w-full justify-between items-center p-3 px-5 gap-4 border-b border-b-PATRON_BLACK">
          <div className="flex w-full justify-start items-center">
            <img
              className="rounded-full h-10 w-10 select-none pointer-events-none"
              src={avatar}
              alt="ok"
            />
            <div className="flex flex-col justify-start items-start ml-2">
              <h4 className="text-base text-PATRON_TEXT_WHITE_PRIMARY">{'Kaushik'}</h4>
              <p className="text-xs text-PATRON_TEXT_WHITE_SECONDARY">
                {address.substring(0, 8)}...
              </p>
            </div>
          </div>
          <Ellipsis />
        </div>

        <img
          className="h-[60%] w-full object-cover select-none pointer-events-none"
          src={imagePreSignedUrl}
          alt="image"
        />

        <div className="flex flex-col justify-center items-start h-[28%] w-full">
          <div className="flex justify-between items-center gap-2 p-3 w-full bg-neutral-950 border-b border-b-PATRON_BORDER_COLOR">
            <div className="flex justify-start items-center gap-2">
              <Heart />
              <MessageCircle />
            </div>
            <Button className="h-9 dark:bg-neutral-800 border dark:border-PATRON_BORDER_COLOR">
              <Gift size={20} color="#BDBDBD" />
            </Button>
          </div>

          <p className="w-full p-3 flex justify-start items-start">
            {description.substring(0, description.length - 50)}...
          </p>
        </div>
      </li>
    </>
  );
};

export default PostCard;
