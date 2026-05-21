import { Request, Response } from 'express';
import { prisma } from '../lib/db.js';

// 1. Menampilkan semua Event
export const getEvents = async (req: Request, res: Response) => {
    try {
        const allEvents = await prisma.event.findMany({
            include: {
                category: {
                    select: { name: true }
                },
                // PERBAIKAN: Gunakan 'pembicara' (tanpa s) sesuai skema One-to-Many
                pembicara: {
                    select: {
                        name: true,
                        role: true,
                        image: true
                    }
                }
            },
            orderBy: {
                dateEvent: 'asc',
            },
        });
        res.status(200).json({ success: true, message: "Data event berhasil diambil", data: allEvents });
    } catch (error) {
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat mengambil data event", error });
    }
};

// 2. Menampilkan detail satu Event berdasarkan ID
export const showEventById = async (req: Request<{ id: string }>, res: Response) => {
    const eventId = parseInt(req.params.id, 10);

    try {
        const eventData = await prisma.event.findUnique({
            where: { id: eventId },
            include: {
                category: true, 
                pembicara: true // PERBAIKAN: Gunakan 'pembicara' (tanpa s)
            }
        });

        if (!eventData) {
            res.status(404).json({ success: false, message: 'Event tidak ditemukan' });
            return;
        }

        res.status(200).json({ success: true, data: eventData });
    } catch (error) {
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat mengambil data event", error });
    }
};

// 3. Membuat Event baru
export const createEvent = async (req: Request, res: Response) => {
    // PERBAIKAN: Tambahkan pembicaraId
    const { name, categoryId, pembicaraId, location, dateEvent, description } = req.body;

    // Validasi input
    if (!name || !categoryId || !pembicaraId || !location || !dateEvent || !description) {
        res.status(400).json({ success: false, message: "Semua field harus diisi" });
        return;
    }

    try {
        const newEvent = await prisma.event.create({
            data: {
                name,
                categoryId: parseInt(categoryId, 10),
                pembicaraId: parseInt(pembicaraId, 10), // PERBAIKAN: Masukkan pembicaraId ke database
                location,
                dateEvent: new Date(dateEvent), 
                description
            },
        });
        res.status(201).json({ success: true, message: "Event berhasil dibuat", data: newEvent });
    } catch (error: any) {
        if (error.code === 'P2003') {
            res.status(400).json({ success: false, message: "Kategori atau Pembicara yang dipilih tidak valid/tidak ditemukan" });
            return;
        }
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat membuat event", error });
    }
};

// 4. Mengupdate data Event
export const updateEventById = async (req: Request<{ id: string }>, res: Response) => {
    const eventId = parseInt(req.params.id, 10);
    // PERBAIKAN: Tambahkan pembicaraId
    const { name, categoryId, pembicaraId, location, dateEvent, description } = req.body;

    try {
        const updatedEvent = await prisma.event.update({
            where: { id: eventId },
            data: {
                name,
                ...(categoryId ? { categoryId: parseInt(categoryId, 10) } : {}),
                ...(pembicaraId ? { pembicaraId: parseInt(pembicaraId, 10) } : {}), // PERBAIKAN: Update pembicaraId jika ada
                location,
                ...(dateEvent ? { dateEvent: new Date(dateEvent) } : {}),
                description
            }
        });

        res.status(200).json({ success: true, message: 'Event berhasil diupdate', data: updatedEvent });
    } catch (error: any) {
        if (error.code === 'P2025') {
            res.status(404).json({ success: false, message: 'Event tidak ditemukan' });
            return;
        }
        if (error.code === 'P2003') {
            res.status(400).json({ success: false, message: "Kategori atau Pembicara yang dipilih tidak valid" });
            return;
        }
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat mengupdate event", error });
    }
};

// 5. Menghapus Event
export const deleteEventById = async (req: Request<{ id: string }>, res: Response) => {
    const eventId = parseInt(req.params.id, 10);

    try {
        await prisma.event.delete({
            where: { id: eventId }
        });

        res.status(200).json({ success: true, message: 'Event berhasil dihapus' });
    } catch (error: any) {
        if (error.code === 'P2025') {
            res.status(404).json({ success: false, message: 'Event tidak ditemukan' });
            return;
        }
        res.status(500).json({ success: false, message: "Terjadi kesalahan saat menghapus event", error });
    }
};