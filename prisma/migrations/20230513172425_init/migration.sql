-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('AZE', 'USD', 'EU', 'RUB');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "family_name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "place_of_registration" TEXT NOT NULL,
    "place_of_residence" TEXT NOT NULL,
    "passport_number" INTEGER NOT NULL,
    "personal_number" INTEGER NOT NULL,
    "phone_number" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "passport_expiration_date" TIMESTAMP(3) NOT NULL,
    "access_token" TEXT NOT NULL,
    "refresh_token" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guarantor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "family_name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "place_of_registration" TEXT NOT NULL,
    "place_of_residence" TEXT NOT NULL,
    "passport_id" TEXT NOT NULL,
    "personal_number" INTEGER NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "passport_expiration_date" TIMESTAMP(3) NOT NULL,
    "gender" "Gender" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Guarantor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BankCount" (
    "id" TEXT NOT NULL,
    "bank_count_number" TEXT NOT NULL,
    "account" INTEGER NOT NULL,
    "expiry_date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "creditCartId" TEXT NOT NULL,

    CONSTRAINT "BankCount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Credit" (
    "id" TEXT NOT NULL,
    "sum" INTEGER NOT NULL,
    "due_date" INTEGER NOT NULL,
    "interest_rate" DOUBLE PRECISION NOT NULL,
    "monthly_income" INTEGER NOT NULL,
    "field_of_activity" TEXT NOT NULL,
    "experience" INTEGER NOT NULL,
    "reason_for_the_loan" TEXT NOT NULL,
    "currency" "Currency" NOT NULL,
    "region" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Credit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreditCart" (
    "id" TEXT NOT NULL,
    "credit_card_number" TEXT NOT NULL,
    "cvv_cod" INTEGER NOT NULL,
    "expiryDate" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "CreditCart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_number_key" ON "User"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Guarantor_id_key" ON "Guarantor"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BankCount_id_key" ON "BankCount"("id");

-- CreateIndex
CREATE UNIQUE INDEX "BankCount_creditCartId_key" ON "BankCount"("creditCartId");

-- CreateIndex
CREATE UNIQUE INDEX "Credit_id_key" ON "Credit"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CreditCart_id_key" ON "CreditCart"("id");

-- AddForeignKey
ALTER TABLE "BankCount" ADD CONSTRAINT "BankCount_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BankCount" ADD CONSTRAINT "BankCount_creditCartId_fkey" FOREIGN KEY ("creditCartId") REFERENCES "CreditCart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credit" ADD CONSTRAINT "Credit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditCart" ADD CONSTRAINT "CreditCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
