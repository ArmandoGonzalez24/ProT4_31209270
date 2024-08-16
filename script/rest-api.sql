-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-08-2024 a las 15:31:20
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rest-api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `autor` varchar(30) NOT NULL,
  `categoria` varchar(30) NOT NULL,
  `año-publicacion` date NOT NULL,
  `isbn` varchar(13) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id`, `nombre`, `autor`, `categoria`, `año-publicacion`, `isbn`) VALUES
(1, 'Inodoro Pereyra', 'Fontanarrosa', 'caricatura', '1984-01-01', '1234567891012'),
(2, 'El Sr de los Anillos', 'JRR Tolkien', 'Fantasia', '1984-01-01', '12345678910'),
(3, 'El Nombre de la Rosa', 'Umberto Eco', 'Novela', '1984-01-01', '12345678911'),
(4, 'El Tunel', 'Ernesto Sabato', 'Novela', '1984-01-01', '1234567891112'),
(5, 'Las Venas Abiertas de America ', 'Eduardo Galeano', 'novela', '1984-01-01', '1234567891011'),
(6, 'Mafalda', 'Quino', 'caricatura', '1984-01-01', '123456789'),
(7, 'El Eternauta', 'Oesterheld', 'caricatura', '1980-01-01', '1234567891013'),
(8, 'Martin Fierro', 'Jose Hernandez', 'novela', '1872-01-01', '1234567891015'),
(9, 'Carrie', 'Stephen King', 'Terror', '1974-01-01', '1234567891014'),
(10, 'Rayuela', 'Julio Cortazar', 'novela', '1863-01-01', '1234567891016');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
