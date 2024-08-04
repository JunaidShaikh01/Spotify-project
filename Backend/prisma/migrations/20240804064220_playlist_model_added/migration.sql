-- AlterTable
ALTER TABLE "Songs" ADD COLUMN     "playlistId" INTEGER;

-- CreateTable
CREATE TABLE "Playlist" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Playlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlaylistSongs" (
    "playlistId" INTEGER NOT NULL,
    "songId" INTEGER NOT NULL,

    CONSTRAINT "PlaylistSongs_pkey" PRIMARY KEY ("playlistId","songId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Playlist_name_key" ON "Playlist"("name");

-- CreateIndex
CREATE INDEX "userId_index" ON "Playlist"("userId");

-- AddForeignKey
ALTER TABLE "Songs" ADD CONSTRAINT "Songs_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Playlist" ADD CONSTRAINT "Playlist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistSongs" ADD CONSTRAINT "PlaylistSongs_playlistId_fkey" FOREIGN KEY ("playlistId") REFERENCES "Playlist"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PlaylistSongs" ADD CONSTRAINT "PlaylistSongs_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Songs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
