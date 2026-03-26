import Schools from "../models/SchoolModel.js";
import getDistance from "../utills/distance.js";
// Add School
export const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude == null || longitude == null) {
      return res.status(400).json({ message: "All fields required" });
    }

    const school = await Schools.create({
      name,
      address,
      latitude,
      longitude,
    });

    res.status(201).json(school);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// List Schools
export const listOfSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    const schools = await Schools.findAll();

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const sorted = schools
      .map((s) => {
        const distance = getDistance(
          userLat,
          userLon,
          s.latitude,
          s.longitude
        );
        return { ...s.toJSON(), distance };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// get all schools without distance
export const getAllSchools = async (req, res) => {
  try {
    const schools = await Schools.findAll();
    if (schools.length === 0) {
      return res.status(404).json({ message: "No schools found" });
    }
    res.status(200).json(schools,{ message: "Schools retrieved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};