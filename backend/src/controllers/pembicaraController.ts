import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// 1. Menampilkan semua data pembicara
export const getpembicara = async (req: Request, res: Response) => {
    try {
        const allPembicara = await prisma.pembicara.findMany({
            orderBy: {
                createdAt: 'desc' // Mengurutkan dari yang paling baru didaftarkan
            }
        });
        res.status(200).json({ success: true, message: "Data pembicara berhasil ditampilkan", data: allPembicara });
    } catch (error) {
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat mengambil data pembicara", error });
    }
};

// 2. Menyimpan data pembicara baru
export const createpembicara = async (req: Request, res: Response) => {
    const { name, role, image } = req.body;

    // Validasi input
    if (!name || !role) {
        res.status(400).json({ success: false, message: "Nama dan role harus diisi" });
        return;
    }

    try {
        const newPembicara = await prisma.pembicara.create({
            data: {
                name,
                role,
                // Jika image bersifat opsional di DB, berikan fallback string kosong jika tidak dikirim user
                image: image || "" 
            }
        });
        res.status(201).json({ success: true, message: "Pembicara berhasil disimpan", data: newPembicara });
    } catch (error) {
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat menyimpan pembicara", error });
    }
};

// 3. Menampilkan data pembicara berdasarkan id
export const getpembicaraById = async (req: Request<{ id: string }>, res: Response) => {
    const pembicaraId = parseInt(req.params.id, 10);

    try {
        const pembicaraData = await prisma.pembicara.findUnique({
            where: { id: pembicaraId }
        });

        if (!pembicaraData) {
            res.status(404).json({ success: false, message: 'Pembicara tidak ditemukan' });
            return;
        }

        res.status(200).json({ success: true, data: pembicaraData });
    } catch (error) {
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat mengambil data pembicara", error });
    }
};

// 4. Mengupdate data pembicara berdasarkan id
export const updatePembicaraById = async (req: Request<{ id: string }>, res: Response) => {
    const pembicaraId = parseInt(req.params.id, 10);
    const { name, role, image } = req.body;

    try {
        // Menggunakan prisma.pembicara.update. Jika id tidak ada, Prisma melempar error P2025
        const updatedPembicara = await prisma.pembicara.update({
            where: { id: pembicaraId },
            data: {
                name,
                role,
                image
            }
        });

        res.status(200).json({ success: true, message: 'Pembicara berhasil diupdate', data: updatedPembicara });
    } catch (error: any) {
        if (error.code === 'P2025') {
            res.status(404).json({ success: false, message: 'Pembicara tidak ditemukan' });
            return;
        }
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat mengupdate pembicara", error });
    }
};

// 5. Menghapus data pembicara berdasarkan id
// Catatan: Typo nama fungsi diperbaiki dari 'delatePembicaraById' menjadi 'deletePembicaraById'
export const deletePembicaraById = async (req: Request<{ id: string }>, res: Response) => {
    const pembicaraId = parseInt(req.params.id, 10);

    try {
        await prisma.pembicara.delete({
            where: { id: pembicaraId }
        });

        res.status(200).json({ success: true, message: 'Pembicara berhasil dihapus' });
    } catch (error: any) {
        if (error.code === 'P2025') {
            res.status(404).json({ success: false, message: 'Pembicara tidak ditemukan' });
            return;
        }
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat menghapus pembicara", error });
    }
};