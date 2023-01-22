USE web_server;

INSERT INTO
    plumbrand (plumBrand)
VALUES
    ("Slon"),
    ("Anton"),
    ("National");

INSERT INTO
    plumfitting (plumFitting)
VALUES
    ("Socket"),
    ("Valve Socket"),
    ("Faucet Socket"),
    ("Elbow"),
    ("Equal Tee"),
    ("Bend"),
    ("Cap"),
    ("Saddle(Clip)"),
    ("Bend 45"),
    ("Reducing Socket"),
    ("Reducing Tee"),
    ("Reducing Faucet Elbow"),
    ("Reducing Faucet Tee"),
    ("Faucet Elbow"),
    ("Faucet Tee"),
    ("Faucet Socket Brass"),
    ("Faucet Elbow Brass"),
    ("Faucet Tee Brass"),
    ("Reducing Faucet Socket Brass"),
    ("Reducing Faucet Elbow Brass"),
    ("Reducing Faucet Tee Brass"),
    ("Reducing Tee Brass"),
    ("Male Thread Endcap"),
    ("Swept Tee"),
    ("Single Y"),
    ("Door Bend 45"),
    ("Door Bend"),
    ("Door Tee"),
    ("Swept Door Tee"),
    ("Single Door Y"),
    ("CPVC Faucet Elbow Brass"),
    ("CPVC Step Overhead Bend"),
    ("CPVC elbow 90"),
    ("CPVC Threaded Female adapter Brass "),
    ("CPVC elbow 45"),
    ("CPVC Coupling"),
    ("CPVC Faucet Tee Brass"),
    ("CPVC Faucet Tee"),
    ("CPVC Threaded male adapter Brass "),
    ("CPVC Threaded male adapter"),
    ("CPVC Threaded Coupling Brass"),
    ("CPVC Reducer bush"),
    ("CPVC Union"),
    ("CPVC Threaded Female adapter"),
    ("CPVC Reducer Coupling"),
    ("CPVC cap"),
    ("CPVC Reducer Tee"),
    ("CPVC Cross"),
    ("CPVC Long Radius Bend");

INSERT INTO
    plumStandard (plumStandard, plumDescription)
VALUES
    (
        " SLS 147 :2013 ",
        " Unplasticized poly (vinyl chloride) pipes for water supply
        and for buried
        and above ground drainage
        and sewerage under pressure "
    ),
    (
        " SLS 659 :2015 ",
        " Unplasticized poly (vinyl chloride) fittings for water supply
        and for buried
        and above ground drainage
        and sewerage under pressure "
    ),
    (
        " SLS 1325 :2007 ",
        " Plastics piping systems for soil
        and waste discharge (
            low
            and high temperature
        ) inside unplasticized poly(vinyl chloride) (PVC - U) "
    ),
    (
        " SLS 1286 ",
        " Unplasticized poly (vinyl chloride) (uPVC) pipes for non - pressure underground drainage
        and sewerage "
    ),
    (" Non - Type ", " Non - Standard "),
    (
        " IS: 15778 - Indian ",
        " Chlorinated polyvinyl chloride (CPVC) pipes for potabvle hot
        and cold water distribution supplies "
    );

INSERT INTO
    plumGrade (plumGrade, plumStandardId)
VALUES
    ("uPVC PNT 14", "1"),
    ("uPVC PNT 14 - Fitting", "2"),
    (" uPVC PNT 11", "1"),
    (" uPVC PNT 11 - Fitting", "2"),
    (" uPVC PN 12.5 - Fitting", "2"),
    (" uPVC PNT 7", "1"),
    (" uPVC CLASS 4.0 ", "3"),
    (" uPVCCLASS 2.5", "3"),
    ("uPVC Drainage - fittings", "3"),
    ("uPVC Drainage (special) SS", "4"),
    ("Tube Well Pipe SS", "5"),
    ("Irrigation Pipe SS", "5"),
    ("CPVC", "6");

INSERT INTO
    plumpipeendtype (plumPipeEndType)
VALUES
    ("PE - Plain Ended"),
    ("SS - Solvent Socketed");

INSERT INTO
    plumsize (
        plumSizeImperial,
        plumSizeMetric
    )
VALUES
    ("20mm", "1/2\""),
    ("25mm", "3/4\""),
    ("32mm", "1\""),
    ("40mm", "1 1/4\""),
    ("50mm", "1 1/2\""),
    ("63mm", "2\""),
    ("75mm", "2 1/2\""),
    ("90mm", "3\""),
    ("110mm", "4\""),
    (
        "25mm x 20mm",
        "3/4\" x 1/2\""
    ),
    ("32mm x 20mm", "1\" x 1/2\""),
    ("32mm x 25mm", "1\" x 3/4\""),
    (
        "40mm x 20mm",
        "1 1/4\" x 1/2\""
    ),
    (
        "40mm x 25mm",
        "1 1/4\" x 3/4\""
    ),
    (
        "40mm x 32mm",
        "1 1/4\" x 1\""
    ),
    (
        "50mmx 20mm",
        "1 1/2\" x 1/2\""
    ),
    (
        "50mm x 25mm",
        "1 1/2\" x 3/4\""
    ),
    (
        "50mm x 32mm",
        "1 1/2\" x 1\""
    ),
    (
        "50mm x 40mm",
        "1 1/2\" x 1 1/4\""
    ),
    ("63mm x 20mm", "2\" x 1/2\""),
    ("63mm x 25mm", "2\" x 3/4\""),
    ("63mm x 32mm", "2\" x 1\""),
    (
        "63mm x 40mm",
        "2\" x 1 1/4\""
    ),
    (
        "63mm x 50mm",
        "2\" x 1 1/2\""
    ),
    (
        "75mm x 32mm",
        "2 1/2\" x 1\""
    ),
    (
        "75mm x 40mm",
        "2 1/2\" x 1 1/4\""
    ),
    (
        "75mm x 50mm",
        "2 1/2\" x 1 1/2\""
    ),
    (
        "75mm x 63mm",
        "2 1/2\" x 2\""
    ),
    (
        "90mm x 40mm",
        "3\" x 1 1/4\""
    ),
    (
        "90mm x 50mm",
        "3\" x 1 1/2\""
    ),
    ("90mm x 63mm", "3\" x 2\""),
    (
        "90mm x 75mm",
        "3\" x 2 1/2\""
    ),
    (
        "110mm x 50mm",
        "4\" x 1 1/2\""
    ),
    ("110mm x 63mm", "4\" x 2\""),
    (
        "110mm x 75mm",
        "4\" x 2 1/2\""
    ),
    ("110mm x 90mm", "4\" x 3\""),
    ("160mm", "6\"");

INSERT INTO
    plumtype (plumType)
VALUES
    ("Pressure pipes"),
    ("Pressure fittings"),
    ("Sewerage and Waste Water Pipes"),
    (
        "Sewerage and Waste Water Fittings"
    ),
    ("Cpvc Pipes"),
    ("Cpvc Fittings");

INSERT INTO
    plumfittinginfo (
        plumFittingId,
        plumSizeId,
        plumGradeId,
        plumBrandId,
        plumTypeId
    )
VALUES
    (1, 1, 2, 1, 2),
    (1, 2, 4, 1, 2),
    (1, 3, 4, 1, 2),
    (1, 4, 4, 1, 2),
    (1, 5, 4, 1, 2),
    (1, 6, 4, 1, 2),
    (1, 7, 4, 1, 2),
    (1, 8, 4, 1, 2),
    (1, 9, 4, 1, 2),
    (2, 1, 2, 1, 2),
    (2, 2, 4, 1, 2),
    (2, 3, 4, 1, 2),
    (2, 4, 4, 1, 2),
    (2, 5, 4, 1, 2),
    (2, 6, 4, 1, 2),
    (2, 7, 4, 1, 2),
    (2, 8, 4, 1, 2),
    (2, 9, 4, 1, 2),
    (3, 1, 2, 1, 2),
    (3, 2, 4, 1, 2),
    (3, 3, 4, 1, 2),
    (3, 4, 4, 1, 2),
    (3, 5, 4, 1, 2),
    (3, 6, 4, 1, 2),
    (3, 7, 4, 1, 2),
    (3, 8, 4, 1, 2),
    (3, 9, 4, 1, 2),
    (4, 1, 2, 1, 2),
    (4, 2, 4, 1, 2),
    (4, 3, 4, 1, 2),
    (4, 4, 4, 1, 2),
    (4, 5, 4, 1, 2),
    (4, 6, 4, 1, 2),
    (4, 7, 4, 1, 2),
    (4, 8, 4, 1, 2),
    (4, 9, 4, 1, 2),
    (5, 1, 2, 1, 2),
    (5, 2, 4, 1, 2),
    (5, 3, 4, 1, 2),
    (5, 4, 4, 1, 2),
    (5, 5, 4, 1, 2),
    (5, 6, 4, 1, 2),
    (5, 7, 4, 1, 2),
    (5, 8, 4, 1, 2),
    (5, 9, 4, 1, 2),
    (6, 1, 2, 1, 2),
    (6, 2, 4, 1, 2),
    (6, 3, 4, 1, 2),
    (6, 4, 4, 1, 2),
    (6, 5, 4, 1, 2),
    (6, 6, 4, 1, 2),
    (6, 7, 4, 1, 2),
    (6, 8, 4, 1, 2),
    (6, 9, 4, 1, 2),
    (7, 1, 2, 1, 2),
    (7, 2, 4, 1, 2),
    (7, 3, 4, 1, 2),
    (7, 4, 4, 1, 2),
    (7, 5, 4, 1, 2),
    (7, 6, 4, 1, 2),
    (7, 7, 4, 1, 2),
    (7, 8, 4, 1, 2),
    (7, 9, 4, 1, 2),
    (8, 1, 2, 1, 2),
    (8, 2, 4, 1, 2),
    (8, 3, 4, 1, 2),
    (8, 4, 4, 1, 2),
    (8, 5, 4, 1, 2),
    (8, 6, 4, 1, 2),
    (8, 7, 4, 1, 2),
    (8, 8, 4, 1, 2),
    (8, 9, 4, 1, 2),
    (9, 1, 2, 1, 2),
    (9, 2, 4, 1, 2),
    (9, 3, 4, 1, 2),
    (9, 4, 4, 1, 2),
    (9, 5, 4, 1, 2),
    (9, 6, 4, 1, 2),
    (10, 10, 4, 1, 2),
    (10, 11, 4, 1, 2),
    (10, 12, 4, 1, 2),
    (10, 13, 4, 1, 2),
    (10, 14, 4, 1, 2),
    (10, 15, 4, 1, 2),
    (10, 16, 4, 1, 2),
    (10, 17, 4, 1, 2),
    (10, 18, 4, 1, 2),
    (10, 19, 4, 1, 2),
    (10, 20, 4, 1, 2),
    (10, 21, 4, 1, 2),
    (10, 22, 4, 1, 2),
    (10, 23, 4, 1, 2),
    (10, 24, 4, 1, 2),
    (10, 25, 4, 1, 2),
    (10, 26, 4, 1, 2),
    (10, 27, 4, 1, 2),
    (10, 28, 4, 1, 2),
    (10, 29, 4, 1, 2),
    (10, 30, 4, 1, 2),
    (10, 31, 4, 1, 2),
    (10, 32, 4, 1, 2),
    (10, 33, 4, 1, 2),
    (10, 34, 4, 1, 2),
    (10, 35, 4, 1, 2),
    (10, 36, 4, 1, 2),
    (11, 10, 4, 1, 2),
    (11, 11, 4, 1, 2),
    (11, 12, 4, 1, 2),
    (11, 13, 4, 1, 2),
    (11, 14, 4, 1, 2),
    (11, 15, 4, 1, 2),
    (11, 16, 4, 1, 2),
    (11, 17, 4, 1, 2),
    (11, 18, 4, 1, 2),
    (11, 19, 4, 1, 2),
    (11, 20, 4, 1, 2),
    (11, 21, 4, 1, 2),
    (11, 22, 4, 1, 2),
    (11, 23, 4, 1, 2),
    (11, 24, 4, 1, 2),
    (11, 25, 4, 1, 2),
    (11, 26, 4, 1, 2),
    (11, 27, 4, 1, 2),
    (11, 28, 4, 1, 2),
    (11, 29, 4, 1, 2),
    (11, 30, 4, 1, 2),
    (11, 31, 4, 1, 2),
    (11, 32, 4, 1, 2),
    (11, 33, 4, 1, 2),
    (11, 34, 4, 1, 2),
    (11, 35, 4, 1, 2),
    (11, 36, 4, 1, 2),
    (12, 10, 4, 1, 2),
    (13, 11, 4, 1, 2),
    (14, 1, 2, 1, 2),
    (15, 1, 2, 1, 2),
    (16, 1, 2, 1, 2),
    (17, 1, 2, 1, 2),
    (18, 1, 2, 1, 2),
    (19, 10, 4, 1, 2),
    (20, 10, 4, 1, 2),
    (21, 11, 4, 1, 2),
    (22, 10, 5, 1, 2),
    (22, 11, 5, 1, 2),
    (20, 10, 5, 1, 2),
    (23, 1, 2, 1, 2),
    (23, 2, 4, 1, 2),
    (23, 3, 4, 1, 2),
    (9, 4, 9, 1, 4),
    (9, 5, 9, 1, 4),
    (9, 6, 9, 1, 4),
    (9, 9, 9, 1, 4),
    (6, 4, 9, 1, 4),
    (6, 5, 9, 1, 4),
    (6, 6, 9, 1, 4),
    (6, 9, 9, 1, 4),
    (5, 4, 9, 1, 4),
    (5, 5, 9, 1, 4),
    (5, 6, 9, 1, 4),
    (5, 9, 9, 1, 4),
    (22, 4, 9, 1, 4),
    (22, 5, 9, 1, 4),
    (22, 9, 9, 1, 4),
    (23, 4, 9, 1, 4),
    (23, 5, 9, 1, 4),
    (23, 6, 9, 1, 4),
    (23, 9, 9, 1, 4),
    (24, 4, 9, 1, 4),
    (24, 5, 9, 1, 4),
    (24, 6, 9, 1, 4),
    (24, 9, 9, 1, 4),
    (25, 4, 9, 1, 4),
    (25, 5, 9, 1, 4),
    (25, 6, 9, 1, 4),
    (25, 9, 9, 1, 4),
    (26, 4, 9, 1, 4),
    (26, 5, 9, 1, 4),
    (26, 6, 9, 1, 4),
    (26, 9, 9, 1, 4),
    (27, 4, 9, 1, 4),
    (27, 5, 9, 1, 4),
    (27, 9, 9, 1, 4),
    (28, 4, 9, 1, 4),
    (28, 5, 9, 1, 4),
    (28, 6, 9, 1, 4),
    (28, 9, 9, 1, 4);
INSERT INTO
    plumpipeinfo (
        plumGradeId,
        plumSizeId,
        plumBrandId,
        plumTypeId,
        plumPipeEndTypeId,
        PlumPipeLengthMetric,
        plumPipeLengthImperial
    )
VALUES
    (1, 1, 1, 1, 1, 4, 13.12),
    (3, 2, 1, 1, 1, 4, 13.12),
    (3, 3, 1, 1, 1, 4, 13.12),
    (3, 4, 1, 1, 1, 4, 13.12),
    (3, 5, 1, 1, 1, 4, 13.12),
    (3, 6, 1, 1, 1, 4, 13.12),
    (3, 7, 1, 1, 1, 4, 13.12),
    (3, 8, 1, 1, 1, 4, 13.12),
    (3, 9, 1, 1, 1, 6, 19.68),
    (6, 2, 1, 1, 1, 4, 13.12),
    (6, 3, 1, 1, 1, 4, 13.12),
    (6, 4, 1, 1, 1, 4, 13.12),
    (6, 5, 1, 1, 1, 4, 13.12),
    (6, 6, 1, 1, 1, 4, 13.12),
    (6, 7, 1, 1, 1, 4, 13.12),
    (6, 8, 1, 1, 1, 4, 13.12),
    (6, 9, 1, 1, 1, 6, 19.68),
    (7, 5, 1, 3, 1, 4, 13.12),
    (7, 6, 1, 3, 1, 4, 13.12),
    (7, 7, 1, 3, 1, 4, 13.12),
    (7, 8, 1, 3, 1, 4, 13.12),
    (7, 9, 1, 3, 1, 6, 19.68),
    (7, 33, 1, 3, 1, 6, 19.68),
    (8, 9, 1, 3, 2, 6, 19.68),
    (8, 33, 1, 3, 2, 6, 19.68),
    (7, 5, 1, 3, 2, 4, 13.12),
    (7, 6, 1, 3, 2, 4, 13.12),
    (7, 7, 1, 3, 2, 4, 13.12),
    (7, 8, 1, 3, 2, 4, 13.12),
    (7, 9, 1, 3, 2, 6, 19.68),
    (7, 33, 1, 3, 2, 6, 19.68);