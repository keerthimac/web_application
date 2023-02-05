USE web_server;

INSERT INTO
    material (material)
VALUES
    ("electrical"),
    ("wall finishes"),
    ("floor & wall tiles"),
    ("cement"),
    ("sand"),
    ("steel"),
    ("brick");

INSERT INTO
    brands_on_materials (material_id, brand_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 3);