-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 25, 2021 at 04:42 PM
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
-- Database: `bibloteka89`
--

-- --------------------------------------------------------

--
-- Table structure for table `biblotekistat`
--

CREATE TABLE `biblotekistat` (
  `id` int(250) NOT NULL,
  `emri` varchar(50) NOT NULL,
  `mbiemri` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `kontakti` varchar(20) NOT NULL,
  `uuid` varchar(200) NOT NULL,
  `verified` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `biblotekistat`
--

INSERT INTO `biblotekistat` (`id`, `emri`, `mbiemri`, `email`, `password`, `kontakti`, `uuid`, `verified`) VALUES
(1, 'asdasd', 'asdasd', 'asdasd', 'asdasd', 'asdasd', 'asdasd', 1),
(2, 'asdasd', 'asdasd', 'asdasd', 'asdasd', 'asdasd', 'asdasd', 0),
(9, 'dardan', 'bakiu', 'dardan.bakiu@gmail.com', '$2b$10$xaWiejjBRUPLdnVX.pNOWewGbqAnTjyNYfWwWEYaB4YgXTE5.Oexa', '124234', '2360f03b-fe30-4914-893f-b101ee706596', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `biblotekistat`
--
ALTER TABLE `biblotekistat`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `biblotekistat`
--
ALTER TABLE `biblotekistat`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
