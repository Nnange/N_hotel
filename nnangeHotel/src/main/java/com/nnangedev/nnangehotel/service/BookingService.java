package com.nnangedev.nnangehotel.service;

import com.nnangedev.nnangehotel.model.BookedRoom;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingService implements IBookingService{
    public List<BookedRoom> getAllBookingsByRoomId(Long roomId) {
        return null;
    }

    @Override
    public void cancelBooking(Long bookingId) {

    }

    @Override
    public String saveBooking(Long roomId, BookedRoom bookingRequest) {
        return null;
    }

    @Override
    public BookedRoom findByBookingConfirmationCode(String confirmationCode) {
        return null;
    }

    @Override
    public List<BookedRoom> getAllBookings() {
        return null;
    }
}
