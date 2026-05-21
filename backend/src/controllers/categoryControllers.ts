import { Request, Response } from 'express';
import { prisma } from '../lib/db.js';

// Catatan: Variabel let categories = [] sudah bisa dihapus karena kita sekarang murni menggunakan database via Prisma.

// 1. Menampilkan list category
export const getCategories = async (req: Request, res: Response) => {
    try {
        const allCategories = await prisma.category.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        res.status(200).json({ message: "Data kategori berhasil diambil", data: allCategories });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil data kategori", error });
    }
};

// 2. Menyimpan data category
export const createCategories = async (req: Request, res: Response) => {
    const { name } = req.body;
    
    if (!name) {
        res.status(400).json({ message: "Nama harus diisi" }); // Mengubah status ke 400 (Bad Request) karena ini kesalahan input user
        return;
    }

    try {
        const newCategory = await prisma.category.create({
            data: {
                name: name
            },
        });
        res.status(201).json({ message: "Kategori berhasil disimpan", data: newCategory });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat menyimpan kategori", error });
    }
};

// 3. Menampilkan data kategori berdasarkan id
export const showCategoryById = async (req: Request<{ id: string }>, res: Response) => {
    const categoryId = parseInt(req.params.id, 10);

    try {
        // Menggunakan findUnique untuk mencari data berdasarkan primary key (id)
        const categoryData = await prisma.category.findUnique({
            where: { id: categoryId }
        });

        // Jika data tidak ditemukan di database, Prisma akan mengembalikan nilai null
        if (!categoryData) {
            res.status(404).json({ success: false, message: 'Category tidak ditemukan' });
            return;
        }

        res.status(200).json({ success: true, data: categoryData });
    } catch (error) {
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat mengambil data kategori", error });
    }
};

// 4. Mengupdate data kategori berdasarkan id
export const updateCategoryById = async (req: Request<{ id: string }>, res: Response) => {
    const categoryId = parseInt(req.params.id, 10);
    const { name } = req.body;

    if (!name) {
        res.status(400).json({ message: 'Nama harus diisi' });
        return;
    }

    try {
        // Jalankan update. Prisma akan otomatis melempar error jika id tidak ditemukan.
        const updatedCategory = await prisma.category.update({
            where: { id: categoryId },
            data: { name: name }
        });

        res.status(200).json({ success: true, message: 'Category berhasil diupdate', data: updatedCategory });
    } catch (error: any) {
        // Pengecekan kode error bawaan Prisma (P2025 berarti record yang mau diupdate tidak ketemu)
        if (error.code === 'P2025') {
            res.status(404).json({ success: false, message: 'Category tidak ditemukan' });
            return;
        }
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat mengupdate kategori", error });
    }
};

// 5. Menghapus data kategori berdasarkan id
export const deleteCategoryById = async (req: Request<{ id: string }>, res: Response) => {
    const categoryId = parseInt(req.params.id, 10);

    try {
        // Jalankan perintah delete berdasarkan id
        await prisma.category.delete({
            where: { id: categoryId }
        });

        res.status(200).json({ success: true, message: 'Category berhasil dihapus' });
    } catch (error: any) {
        // Pengecekan kode error bawaan Prisma jika data tidak ditemukan saat ingin dihapus
        if (error.code === 'P2025') {
            res.status(404).json({ success: false, message: 'Category tidak ditemukan' });
            return;
        }
        res.status(500).json({ success: false, message: "Kategori sedang digunakan Event", error });
    }
};