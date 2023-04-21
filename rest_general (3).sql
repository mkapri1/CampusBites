
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rest_general`
--

-- --------------------------------------------------------

--
-- Table structure for table `coords`
--

CREATE TABLE `coords` (
  `Address` varchar(40) NOT NULL,
  `Latitude` varchar(20) NOT NULL,
  `Longitude` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `coords`
--

INSERT INTO `coords` (`Address`, `Latitude`, `Longitude`) VALUES
('68 Broad St NW, Atlanta, GA 30303', '33.755451', '-84.389352'),
('66 Courtland St NE, Atlanta, GA 30303', '33.755173', '-84.384279'),
('55 Gilmer St SE, Atlanta, GA 30302', '33.7534', '-84.3856'),
('30 Decatur St. SE, Atlanta, GA 30303', '33.749712', '-84.381485'),
('18 Park Pl NE S, Atlanta, GA 30303', '33.755019', '-84.388135'),
('31 Edgewood Ave NE, Atlanta, GA 30303', '33.755506', '-84.360437'),
('33 Edgewood Ave SE, Atlanta, GA 30303', '33.754482', '-84.371915'),
('52 Peachtree St, Atlanta, GA 30303', '33.755183', '-84.389362'),
('54 Broad St NW, Atlanta, GA 30303', '33.755451', '-84.389352'),
('57 Forsyth St NW Suite 63, Atlanta, GA 3', '33.7562974248', '-84.3896764379');

-- --------------------------------------------------------

--
-- Table structure for table `filters`
--

CREATE TABLE `filters` (
  `Filter ID` int(20) NOT NULL,
  `Filter` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `filters`
--

INSERT INTO `filters` (`Filter ID`, `Filter`) VALUES
(1, 'Quick-Bite'),
(2, 'Take-Out'),
(3, 'Vegan'),
(4, 'Vegetarian'),
(5, 'Catering'),
(6, 'Chill-Out');

-- --------------------------------------------------------

--
-- Table structure for table `general`
--

CREATE TABLE `general` (
  `ID` int(3) NOT NULL,
  `Name` text NOT NULL,
  `Filter ID` varchar(10) NOT NULL,
  `Address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `general`
--

INSERT INTO `general` (`ID`, `Name`, `Filter ID`, `Address`) VALUES
(1, 'Möge tee', '2', '68 Broad St NW, Atlanta, GA 30303'),
(2, 'Chick-fil-a', '1 2 4', '66 Courtland St NE, Atlanta, GA 30303'),
(3, 'Panda Express', '2', '55 Gilmer St SE, Atlanta, GA 30302'),
(4, 'Mr Fries Man', '1 2 6 ', '30 Decatur St. SE, Atlanta, GA 30303'),
(5, 'Pho King Express', '6 2 3 4', '18 Park Pl NE S, Atlanta, GA 30303'),
(6, 'Mr. Hibachi', '2 6', '31 Edgewood Ave NE, Atlanta, GA 30303'),
(7, 'Sensational Subs', '1 2 3 4 6', '33 Edgewood Ave SE, Atlanta, GA 30303'),
(8, 'Anatolia Cafe & Hookah Lounge', '1 6', '52 Peachtree St, Atlanta, GA 30303'),
(9, 'Taqueria on Broad', '1 2 6', '54 Broad St NW, Atlanta, GA 30303'),
(10, 'Big Dave\'s Cheesesteaks', '1 2 3', '57 Forsyth St NW Suite 63, Atlanta, GA 30303');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `general`
--
ALTER TABLE `general`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `general`
--
ALTER TABLE `general`
  MODIFY `ID` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
