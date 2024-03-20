/*
  Warnings:

  - You are about to drop the column `description` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Subcategory` table. All the data in the column will be lost.
  - Added the required column `englishDescription` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spanishDescription` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `englishDescription` to the `Subcategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `spanishDescription` to the `Subcategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Category" DROP COLUMN "description",
ADD COLUMN     "englishDescription" TEXT NOT NULL,
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "spanishDescription" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."Subcategory" DROP COLUMN "description",
ADD COLUMN     "englishDescription" TEXT NOT NULL,
ADD COLUMN     "spanishDescription" TEXT NOT NULL;
