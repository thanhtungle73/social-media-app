import { Feed } from '@/components/common/feed';
import { CoverImage } from '@/components/cover-image';
import { CreatePost } from '@/components/create-post';
import { UserInfo } from '@/components/user-info';
import { PostData, UserData } from '@/models';
import * as React from 'react';

export interface ProfilePageProps {}

const user: UserData = {
  id: '1',
  email: 'thanhtungle@gmail.com',
  username: 'Fan Page',
  profilePicture: 'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
};

const posts: PostData[] = [
  {
    id: 1,
    description: 'This is description 1',
    images: [
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
    ],
    likes: ['123', '123'],
  },
  {
    id: 2,
    description: 'This is description 1',
    images: [
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
    ],
    likes: ['123', '123'],
  },
  {
    id: 3,
    description: 'This is description 1',
    images: [
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
    ],
    likes: ['123', '123'],
  },
  {
    id: 4,
    description: 'This is description 1',
    images: [
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
      'https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg',
    ],
    likes: ['123', '123'],
  },
  {
    id: 5,
    description: 'This is description 1',
    images: ['https://demoda.vn/wp-content/uploads/2022/04/avatar-facebook-dep.jpg'],
    likes: ['123', '123'],
  },
];

const userInfo = {
  work: 'ABC Company',
  live: 'Ho Chi Minh City',
  from: 'Ho Chi Minh City',
  follow: '1K people',
};

export function ProfilePage(props: ProfilePageProps) {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <CoverImage />

      <div className="flex flex-nowrap px-9 flex-col xl:flex-row">
        <div className="w-full xl:max-w-[500px] mr-4 mt-4">
          <UserInfo
            bio={
              'Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id m'
            }
            userInfo={userInfo}
          />
        </div>
        <div className="flex-1">
          <CreatePost user={user} className="m-0" />
          {posts.map((post, index) => (
            <Feed key={post.id} user={user} {...post} post={post} className="m-0 px-0 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}