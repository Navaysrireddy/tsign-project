import React from 'react';
import { motion } from 'framer-motion';
const Settings = ({
  darkMode
}) => {
  return <div className="space-y-6">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
      </motion.div>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5,
      delay: 0.2
    }} className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800 shadow-[5px_5px_10px_#1f2937,-5px_-5px_10px_#374151]' : 'bg-white shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}`}>
        <h2 className="text-xl font-semibold mb-4">User Settings</h2>
        <p className="text-gray-500">
          This is a placeholder for the Settings page. Content will be
          implemented in future updates.
        </p>
      </motion.div>
    </div>;
};
export default Settings;