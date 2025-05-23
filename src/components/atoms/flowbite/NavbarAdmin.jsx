"use client";

import {Avatar, Dropdown, Navbar} from "flowbite-react";
import Image from "next/image";

export default function NavbarAdmin() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href='/'>
        <Image
          src='/images/logo.svg'
          width={200}
          height={100}
          className='mr-3 h-6 sm:h-9 bg-agro-green rounded-lg'
          alt='Flowbite React Logo'
        />
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt='User settings'
              img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className='block text-sm'>Bonnie Green</span>
            <span className='block truncate text-sm font-medium'>
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}
