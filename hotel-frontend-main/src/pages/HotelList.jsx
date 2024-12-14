import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  Rating,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { FaWifi, FaDumbbell, FaSpa, FaParking, FaUtensils, FaCocktail } from "react-icons/fa"; // Import icons
import axios from "axios";
import { BACKEND_URL } from "../const";

// Map amenities to icons
const amenitiesIcons = {
  WiFi: <FaWifi />,
  Gym: <FaDumbbell />,
  Spa: <FaSpa />,
  Parking: <FaParking />,
  Restaurant: <FaUtensils />,
  Bar: <FaCocktail />,
};

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Navigation hook

  const fetchHotels = (query = "") => {
    axios
      .get(`${BACKEND_URL}/hotels`)
      .then((response) => {
        setHotels(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the hotels:", error);
      });
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const handleSearch = () => {
    fetchHotels(searchQuery);
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Search Section */}
      <Box display="flex" justifyContent="center" mb={3}>
        <TextField
          label="Search for Hotels"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "50%", marginRight: 2 }}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      {/* Hotels List */}
      <Box display="flex" gap={2} flexWrap="wrap">
        {hotels?.map((hotel) => (
          <Card sx={{ minWidth: 300,maxWidth: 300, mb: 2 }} key={hotel._id}>
            <CardMedia
              sx={{ height: 140 }}
              image={hotel.imageUrl || "https://picsum.photos/200/300"}
              title="Hotel Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {hotel.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", marginBottom: 1 }}
              >
                {hotel.address}, {hotel.city}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", marginBottom: 2 }}
              >
                ₹{hotel.price} per night
              </Typography>
              <Rating
                name="hotel-rating"
                value={hotel.rating}
                precision={0.1}
                readOnly
              />
              {/* Amenities */}
              <Box display="flex" gap={1} flexWrap="wrap" sx={{ mt: 2 }}>
                {hotel.amenities.map((amenity) => (
                  <Box
                    key={amenity}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                      fontSize: "0.9rem",
                      backgroundColor: "#f5f5f5",
                      padding: "5px 10px",
                      borderRadius: "12px",
                    }}
                  >
                    {amenitiesIcons[amenity] || null}
                  </Box>
                ))}
              </Box>
              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                fullWidth
                onClick={() => navigate(`/hotels/${hotel._id}`)}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default HotelList;