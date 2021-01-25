-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2021 at 04:28 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `merrjep89`
--

-- --------------------------------------------------------

--
-- Table structure for table `veturat`
--

CREATE TABLE `veturat` (
  `id` int(250) NOT NULL,
  `emriVetures` varchar(50) NOT NULL,
  `pershkrimi` varchar(500) NOT NULL,
  `telefoni` varchar(20) NOT NULL,
  `emriShitesit` varchar(30) NOT NULL,
  `cmimi` int(10) NOT NULL,
  `img` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `veturat`
--

INSERT INTO `veturat` (`id`, `emriVetures`, `pershkrimi`, `telefoni`, `emriShitesit`, `cmimi`, `img`) VALUES
(3, 'Mercedes', 'Model S ', '2342343', 'Edber', 111111, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-mercedes-benz-s-class-130-1598983814.jpg?crop=0.869xw:0.651xh;0.131xw,0.173xh&resize=1200:*'),
(4, 'BMW', 'tipi : M7', '234234234', 'Dardan', 123433, 'https://cdn.motor1.com/images/mgl/W0rkj/s3/bmw-7-series-concept-renderings-by-aksyonov-nikita.jpg'),
(5, 'BMW', 'i mire', '234234', 'Arber', 1111111, 'https://cdn.carbuzz.com/gallery-images/840x560/426000/600/426644.jpg'),
(6, 'Audi', 'S4 2021', '234234', 'Edber', 1000000, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2021-audi-s4-mmp-1-1591394223.jpg?crop=0.715xw:0.536xh;0.0673xw,0.353xh&resize=640:*');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `veturat`
--
ALTER TABLE `veturat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `veturat`
--
ALTER TABLE `veturat`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
