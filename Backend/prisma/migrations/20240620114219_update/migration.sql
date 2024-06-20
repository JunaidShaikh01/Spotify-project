/*
  Warnings:

  - You are about to drop the column `audioUrl` on the `Songs` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Songs` table. All the data in the column will be lost.
  - Added the required column `audio` to the `Songs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Songs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Songs" DROP COLUMN "audioUrl",
DROP COLUMN "imageUrl",
ADD COLUMN     "audio" TEXT NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL;
