-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2024 at 06:17 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dineth_ppa`
--

-- --------------------------------------------------------

--
-- Table structure for table `computer_item`
--

CREATE TABLE `computer_item` (
  `item_id` int(11) NOT NULL,
  `date` datetime(6) DEFAULT NULL,
  `item_image1` varchar(255) DEFAULT NULL,
  `item_image2` varchar(255) DEFAULT NULL,
  `item_image3` varchar(255) DEFAULT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_status` varchar(255) NOT NULL,
  `item_type` varchar(255) NOT NULL,
  `submitted_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `computer_item`
--

INSERT INTO `computer_item` (`item_id`, `date`, `item_image1`, `item_image2`, `item_image3`, `item_name`, `item_status`, `item_type`, `submitted_by`) VALUES
(6, NULL, 'https://www.baka-tsuki.org/project/thumb.php?f=KonoSuba14Portada.jpg&width=500', '', '', 'Gaming Monitor', 'Not Checked', 'Monitor', 'takanomii@outlook.com'),
(7, NULL, 'https://www.baka-tsuki.org/project/thumb.php?f=AliceShirley_1_cover.jpg&width=450', '', '', 'CPU Case', 'Not Checked', 'CPU Case', 'takanomii@outlook.com'),
(8, NULL, 'https://www.baka-tsuki.org/project/thumb.php?f=KonoSuba14Portada.jpg&width=500', '', '', 'CPU Case 2', 'Not Checked', 'CPU Case 2', 'takanomii@outlook.com'),
(9, NULL, 'https://www.baka-tsuki.org/project/thumb.php?f=AliceShirley_1_cover.jpg&width=450', '', '', 'CPU Case 3', 'Not Checked', 'CPU Case 3', 'takanomii@outlook.com'),
(10, '2024-03-07 20:41:28.000000', 'https://1.bp.blogspot.com/-ieXuUA3UWcI/UJZXPwdC2uI/AAAAAAAAApQ/g9IApsQjiNc/s1600/Toradora!+light+novel+volume+1+cove.jpg', NULL, NULL, 'Toradora Mouse Pad', 'Not Checked', 'Mouse Pad', 'lochandineth@outlook.com'),
(12, '2024-03-07 22:08:22.000000', 'https://www.baka-tsuki.org/project/images/4/4c/Absolute_Duo_Volume_10_Cover.jpg', '', '', 'Gaming Mouse Pad', 'Started Repair', 'Mouse Pad', 'takanomii@outlook.com'),
(13, '2024-03-07 22:12:33.000000', 'https://www.baka-tsuki.org/project/images/c/ce/UnlimitedFafnir_v01_Cover.jpg', '', '', 'Mouse Pad Fafnir', 'Accepted Repair', 'Mouse Pad', 'lochandineth@outlook.com'),
(16, '2024-03-09 17:00:58.000000', 'https://gifsec.com/wp-content/uploads/2022/10/cute-anime-girl-1.gif', '', '', 'Test 123', 'Accepted Repair', 'Test ', 'takanomiyo@outlook.com'),
(18, '2024-04-22 21:46:26.000000', 'https://placehold.co/600x400.png', '', '', 'Test', 'Not Checked', 'Test', 'takanomii@outlook.com');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `message_id` int(11) NOT NULL,
  `date` datetime(6) DEFAULT NULL,
  `message_image` varchar(255) DEFAULT NULL,
  `message_status` varchar(255) DEFAULT NULL,
  `msgtext` varchar(255) DEFAULT NULL,
  `submittedby` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`message_id`, `date`, `message_image`, `message_status`, `msgtext`, `submittedby`) VALUES
(8, '2024-03-08 21:58:48.000000', 'https://placehold.co/600x400.png', 'Not Verified', 'Hello Sir Knight!', 'takanomii@outlook.com'),
(9, '2024-03-09 16:25:35.000000', 'https://placehold.co/600x400.png', 'Not Verified', 'Hello Hello! ', 'lochandineth@nekosoft.com'),
(10, '2024-03-09 16:55:13.000000', 'https://placehold.co/600x400.png', 'Not Verified', 'Hello Everyone', 'takanomiyo@outlook.com'),
(11, '2024-03-09 17:12:54.000000', 'https://placehold.co/600x400.png', 'Not Verified', 'Hello Admin', 'takanomiyo@outlook.com'),
(12, '2024-03-09 17:13:12.000000', 'https://placehold.co/600x400.png', 'Not Verified', 'Hello User!', 'lochandineth@nekosoft.com'),
(13, '2024-04-22 19:30:20.000000', 'https://placehold.co/600x400.png', 'Not Verified', 'Testing Pages!', 'takanomii@outlook.com'),
(14, '2024-04-22 21:43:58.000000', 'https://placehold.co/600x400.png', 'Not Verified', 'This is a test!!!!', 'takanomii@outlook.com');

-- --------------------------------------------------------

--
-- Table structure for table `new_pc_part`
--

CREATE TABLE `new_pc_part` (
  `new_pc_part_id` int(11) NOT NULL,
  `new_pc_part_name` varchar(255) NOT NULL,
  `new_pc_part_price` int(11) NOT NULL,
  `new_pc_part_status` varchar(255) NOT NULL,
  `new_pc_part_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `new_pc_part`
--

INSERT INTO `new_pc_part` (`new_pc_part_id`, `new_pc_part_name`, `new_pc_part_price`, `new_pc_part_status`, `new_pc_part_type`) VALUES
(1, 'CPU Case Azure', 20000, 'Available', 'Case'),
(2, 'CPU Case Teal', 15000, 'Available', 'Case'),
(3, 'Generic Mouse', 4000, 'Available', 'Mouse'),
(4, 'Gaming Mouse', 5000, 'Available', 'Mouse'),
(5, 'Generic Speaker', 5000, 'Available', 'Speaker'),
(6, 'Low Latency Speaker', 5000, 'Available', 'Speaker'),
(7, 'Generic Keyboard', 5000, 'Available', 'Keyboard'),
(8, 'Mechanical Keyboard', 5000, 'Available', 'Keyboard'),
(9, 'Generic Monitor', 35000, 'Available', 'Monitor'),
(10, 'Low Latency Monitor', 45000, 'Available', 'Monitor'),
(11, 'Intel i9-14900K', 45000, 'Available', 'CPU'),
(12, 'Intel i5-14600K/KF', 35000, 'Available', 'CPU'),
(13, 'Nvidia RTX 3090', 350000, 'Available', 'GPU'),
(14, 'Intel Arc A750', 150000, 'Available', 'GPU'),
(15, 'ASRock B650M Pro Rs WiFi AM5 Micro ATX', 150000, 'Available', 'Motherboard'),
(16, 'GIGABYTE B650 AORUS Elite AX', 150000, 'Available', 'Motherboard'),
(17, 'Kingston HyperX Fury', 150000, 'Available', 'RAM'),
(18, 'Corsair Vengeance LED', 150000, 'Available', 'RAM'),
(19, 'Secure Power Supply', 10000, 'Available', 'PSU'),
(20, 'Low Power PSU', 10000, 'Available', 'PSU');

-- --------------------------------------------------------

--
-- Table structure for table `pc_orders`
--

CREATE TABLE `pc_orders` (
  `order_id` int(11) NOT NULL,
  `order_case` varchar(255) DEFAULT NULL,
  `order_cpu` varchar(255) DEFAULT NULL,
  `order_gpu` varchar(255) DEFAULT NULL,
  `order_input` varchar(255) DEFAULT NULL,
  `order_keyboard` varchar(255) DEFAULT NULL,
  `order_monitor` varchar(255) DEFAULT NULL,
  `order_motherboard` varchar(255) DEFAULT NULL,
  `order_mouse` varchar(255) DEFAULT NULL,
  `order_nic` varchar(255) DEFAULT NULL,
  `order_psu` varchar(255) DEFAULT NULL,
  `order_ram` varchar(255) DEFAULT NULL,
  `order_speaker` varchar(255) DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  `order_storage` varchar(255) DEFAULT NULL,
  `order_user` varchar(255) DEFAULT NULL,
  `order_webcam` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pc_orders`
--

INSERT INTO `pc_orders` (`order_id`, `order_case`, `order_cpu`, `order_gpu`, `order_input`, `order_keyboard`, `order_monitor`, `order_motherboard`, `order_mouse`, `order_nic`, `order_psu`, `order_ram`, `order_speaker`, `order_status`, `order_storage`, `order_user`, `order_webcam`) VALUES
(3, 'CPU Case Azure', 'Intel i9-14900K', 'Intel Arc A750', '', 'Generic Keyboard', 'Low Latency Monitor', 'ASRock B650M Pro Rs WiFi AM5 Micro ATX', 'Gaming Mouse', '', 'Secure Power Supply', 'Kingston HyperX Fury', 'Low Latency Speaker', 'Order Progressing', '', 'lochandineth@outlook.com', ''),
(5, 'CPU Case Teal', 'Intel i5-14600K/KF', 'Intel Arc A750', '', 'Mechanical Keyboard', 'Low Latency Monitor', 'GIGABYTE B650 AORUS Elite AX', 'Gaming Mouse', '', 'Secure Power Supply', 'Corsair Vengeance LED', 'Low Latency Speaker', 'Not Checked', '', 'takanomii@outlook.com', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_type` varchar(255) NOT NULL,
  `user_verified` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_email`, `user_name`, `user_password`, `user_type`, `user_verified`) VALUES
(1, 'lochandineth@nekosoft.com', 'Dineth Mallawarachchi', 'dineth123', 'Admin', 'True'),
(2, 'lochandineth@outlook.com', 'Dineth Mallawarachchi', 'dineth123', 'User', 'True'),
(4, 'takanomii@outlook.com', 'Mii Takano', 'mii123', 'User', 'True'),
(6, 'takanomiyo@outlook.com', 'Takano Miyo', 'miyo123', 'User', 'True');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `computer_item`
--
ALTER TABLE `computer_item`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `new_pc_part`
--
ALTER TABLE `new_pc_part`
  ADD PRIMARY KEY (`new_pc_part_id`);

--
-- Indexes for table `pc_orders`
--
ALTER TABLE `pc_orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `computer_item`
--
ALTER TABLE `computer_item`
  MODIFY `item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `message_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `new_pc_part`
--
ALTER TABLE `new_pc_part`
  MODIFY `new_pc_part_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `pc_orders`
--
ALTER TABLE `pc_orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
