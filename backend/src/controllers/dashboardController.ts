import { Request, Response } from 'express';
import { prisma } from '../lib/db.js'; // Sesuaikan path ini dengan struktur foldermu

export const getDashboardSummary = async (req: Request, res: Response) => {
    try {
        // Mengambil semua data secara paralel agar lebih cepat
        const [totalEvent, totalPembicara, totalKategori, upcomingEvents] = await Promise.all([
            prisma.event.count(),
            prisma.pembicara.count(),
            prisma.category.count(),
            // Mengambil 5 event terdekat yang tanggalnya lebih dari hari ini
            prisma.event.findMany({
                where: {
                    dateEvent: {
                        gte: new Date(), // gte = greater than or equal (hari ini dan ke depan)
                    }
                },
                orderBy: {
                    dateEvent: 'asc', // Urutkan dari yang paling dekat
                },
                take: 5, // Batasi hanya menampilkan 5 data
                select: {
                    id: true,
                    name: true,
                    dateEvent: true,
                    location: true,
                    category: {
                        select: { name: true }
                    }
                }
            })
        ]);

        res.status(200).json({
            success: true,
            message: "Data dashboard berhasil diambil",
            data: {
                stats: {
                    totalEvent,
                    totalPembicara,
                    totalKategori,
                },
                upcomingEvents
            }
        });
    } catch (error) {
        console.error("Dashboard Error:", error);
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat mengambil data dashboard", error });
    }
};