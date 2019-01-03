-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 03 jan. 2019 à 22:32
-- Version du serveur :  10.1.33-MariaDB
-- Version de PHP :  7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `astonapi`
--
CREATE DATABASE IF NOT EXISTS `astonapi` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `astonapi`;

-- --------------------------------------------------------

--
-- Structure de la table `jobs`
--

CREATE TABLE IF NOT EXISTS `jobs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `contract_type` varchar(255) DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `published_date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `prenom`, `email`, `password`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 'Tartine', 'Chocolat', 'tc@gmail.com', '$2b$10$iD3PsIcd.6nIx3vTt5aodeTkuMWJu3yAscgiGMWdSzjv6dZnUSSna', 1, '2019-01-02 17:44:06', '2019-01-02 17:44:06'),
(2, 'test', 'test', 'test@gmail.com', '$2b$10$4p3YQ/GtcFl.e8GdyDIUBOgyqEQOp4UJPSP9PFqMvqOiu8xUGSxGq', 1, '2019-01-02 22:22:29', '2019-01-02 22:22:29'),
(3, 'Martin', 'Dupont', 'md@gmail.com', '$2b$10$J1lS2vUZQFXLEz0nu8XgjOKI7iItEct/QHiqc1vlmSurAZngSZ.Ke', 1, '2019-01-03 20:33:03', '2019-01-03 20:33:03');


--
-- Métadonnées
--
USE `phpmyadmin`;

--
-- Métadonnées pour la table jobs
--

--
-- Métadonnées pour la table users
--

--
-- Métadonnées pour la base de données astonapi
--
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
