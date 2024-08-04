/*
  Warnings:

  - You are about to drop the column `created_at` on the `Playlist` table. All the data in the column will be lost.
  - You are about to drop the column `creratedAt` on the `Songs` table. All the data in the column will be lost.
  - You are about to drop the column `playlistId` on the `Songs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Songs" DROP CONSTRAINT "Songs_playlistId_fkey";

-- DropIndex
DROP INDEX "Playlist_name_key";

-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Songs" DROP COLUMN "creratedAt",
DROP COLUMN "playlistId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
