'use client'
import Card from "../../../components/Card";
import Layout from "../../../components/Layout";
import Avatar from "../../../components/Avatar";
import Postcard from "../../../components/Postcard";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Profile() {
  const pathname = usePathname();
  const isPosts=pathname.includes('posts') || pathname.includes('/profile'); 
  const isAbout=pathname.includes('/about');
  const isFriends=pathname.includes('/friends');
  const isPhotos=pathname.includes('/photos');

  let activeTabClasses="flex gap-1 content-center bg-blue-500 bg-opacity-20 rounded-t-md font-bold px-2 border-b-4 border-b-blue-500";
  let tabClasses="flex gap-1 content-center border-b-4 border-b-white";

  return (
    <Layout>
      <Card noPadding={true} >
        <div className=" relative overflow-hidden rounded-md">
          <div className=" h-40 overflow-hidden flex justify-center place-items-start">
            <img src="https://images.unsplash.com/photo-1482361046637-0226fdcfa3b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
          </div>
          <div className="absolute top-28 left-2">
            <Avatar size={"lg"} />
          </div>
          <div className=" p-6 pl-44">
            <h2 className=" ml-4 text-3xl font-bold">Monalisa Dey</h2>
            <div className=" text-gray-500 ml-4 leading-4 text-sm">
              Sector-V, Kolkata
            </div>
          </div>
          <div className="pt-6 pl-12 pb-0.5 flex gap-6 items-center">
            <Link href={'/profile/about'} className={isAbout ? activeTabClasses : tabClasses}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
              About
            </Link>
            <Link href={'/profile/posts'} className={isPosts ? activeTabClasses : tabClasses}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
              Posts
            </Link>
            <Link href="/profile/friends" className={isFriends ? activeTabClasses : tabClasses}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              Friends
            </Link>
            <Link href="/profile/photos" className={isPhotos ? activeTabClasses : tabClasses}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Photos
            </Link>
          </div>
        </div>
      </Card>
      {
        isPosts && (
            <div>
                <Postcard />
            </div>
        )
      }
    </Layout>
  );
}
