/*
  Warnings:

  - Added the required column `albumName` to the `Songs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Songs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language` to the `Songs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `singerName` to the `Songs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Songs" ADD COLUMN     "albumName" TEXT NOT NULL,
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "language" TEXT NOT NULL,
ADD COLUMN     "singerName" TEXT NOT NULL;
