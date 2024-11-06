import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Blogs = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Gadget Heaven | Blogs</title>
        </Helmet>
        
      <div className="text-center bg-purple-700 text-white space-y-3 py-8">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <p>Explore the latest gadgets that will take your experience to <br /> the next level. From smart devices to the coolest accessories, <br /> we have it all!</p>
      </div>
      <div className="w-10/12 my-20 mx-auto">
        <div className="border rounded-2xl p-4">
          <h1 className="text-2xl font-bold">How to Use a Mobile Phone: Quick Guide</h1>
        <p>
Using a mobile phone is simple once you know the basics. First, power it on by holding the side button and unlock it with a passcode, fingerprint, or facial recognition. Use the “Phone” app to make or receive calls, and the “Messages” app to send texts. To go online, connect to Wi-Fi or enable mobile data in Settings.

Download apps from the App Store (iPhone) or Google Play Store (Android). Take photos with the “Camera” app and view them in the “Photos” or “Gallery” app. You can use the “Calendar” app for important dates and the “Maps” app for navigation.

Finally, stay secure by setting up a screen lock and backing up your data. With these basics, you’ll be comfortable navigating your phone in no time!</p>
        </div>
        <div className="border rounded-2xl p-4 mt-4">
          <h1 className="text-2xl font-bold">How to Use a Computer: Quick Guide</h1>
          <p>To start using a laptop, press the power button, and if prompted, enter your password to log in. Navigate the screen with the trackpad or an external mouse, and use the keyboard for typing. To connect to the internet, select the network icon, choose your Wi-Fi, and enter the password. You can open apps from the Start menu (on Windows) or Dock (on Mac), such as a web browser for browsing the internet. To save files, choose “Save” from the File menu in any program, selecting folders like Documents or Desktop for easy access. Adjust volume and brightness settings through the function keys or control panel for comfort. Keep your system secure by updating software regularly, and back up important files on cloud storage or an external drive. With these essentials, you’ll be able to use your laptop confidently and efficiently.</p>
        </div>
      </div>
      </div>
      </HelmetProvider>
  );
};

export default Blogs;