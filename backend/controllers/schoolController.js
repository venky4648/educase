import School from "../models/SchoolModel.js";
import getDistance from "../utills/distance.js";
// Add School
export const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude == null || longitude == null) {
      return res.status(400).json({ message: "All fields required" });
    }

    const school = await School.create({
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

    const schools = await School.findAll();

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