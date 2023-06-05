return Math.round(
  meal_cost + (meal_cost / 100) * tip_percent + (tax_percent / 100) * meal_cost
);
