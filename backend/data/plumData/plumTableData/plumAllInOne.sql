USE web_server;

INSERT INTO
    PlumBrand (plumBrand)
VALUES
    ("Slon"),
    ("Anton"),
    ("National");

INSERT INTO
    PlumFitting (plumFitting)
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
    PlumStandard (plumStandard, plumDescription)
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
    PlumGrade (plumGrade, plumStandardId)
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
    PlumPipeEndType (plumPipeEndType)
VALUES
    ("PE - Plain Ended"),
    ("SS - Solvent Socketed");

INSERT INTO
    PlumSize (
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
    PlumType (plumType)
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
    PlumFittingInfos (
        plumFittingId,
        plumBrandId,
        plumGradeId,
        plumSizeId,
        plumTypeId
    )
VALUES
    (1, 1, 2, 1, 2),
    (1, 1, 4, 2, 2),
    (1, 1, 4, 3, 2),
    (1, 1, 4, 4, 2),
    (1, 1, 4, 5, 2),
    (1, 1, 4, 6, 2),
    (1, 1, 4, 7, 2),
    (1, 1, 4, 8, 2),
    (1, 1, 4, 9, 2),
    (2, 1, 2, 1, 2),
    (2, 1, 4, 2, 2),
    (2, 1, 4, 3, 2),
    (2, 1, 4, 4, 2),
    (2, 1, 4, 5, 2),
    (2, 1, 4, 6, 2),
    (2, 1, 4, 7, 2),
    (2, 1, 4, 8, 2),
    (2, 1, 4, 9, 2),
    (3, 1, 2, 1, 2),
    (3, 1, 4, 2, 2),
    (3, 1, 4, 3, 2),
    (3, 1, 4, 4, 2),
    (3, 1, 4, 5, 2),
    (3, 1, 4, 6, 2),
    (3, 1, 4, 7, 2),
    (3, 1, 4, 8, 2),
    (3, 1, 4, 9, 2),
    (4, 1, 2, 1, 2),
    (4, 1, 4, 2, 2),
    (4, 1, 4, 3, 2),
    (4, 1, 4, 4, 2),
    (4, 1, 4, 5, 2),
    (4, 1, 4, 6, 2),
    (4, 1, 4, 7, 2),
    (4, 1, 4, 8, 2),
    (4, 1, 4, 9, 2),
    (5, 1, 2, 1, 2),
    (5, 1, 4, 2, 2),
    (5, 1, 4, 3, 2),
    (5, 1, 4, 4, 2),
    (5, 1, 4, 5, 2),
    (5, 1, 4, 6, 2),
    (5, 1, 4, 7, 2),
    (5, 1, 4, 8, 2),
    (5, 1, 4, 9, 2),
    (6, 1, 2, 1, 2),
    (6, 1, 4, 2, 2),
    (6, 1, 4, 3, 2),
    (6, 1, 4, 4, 2),
    (6, 1, 4, 5, 2),
    (6, 1, 4, 6, 2),
    (6, 1, 4, 7, 2),
    (6, 1, 4, 8, 2),
    (6, 1, 4, 9, 2),
    (7, 1, 2, 1, 2),
    (7, 1, 4, 2, 2),
    (7, 1, 4, 3, 2),
    (7, 1, 4, 4, 2),
    (7, 1, 4, 5, 2),
    (7, 1, 4, 6, 2),
    (7, 1, 4, 7, 2),
    (7, 1, 4, 8, 2),
    (7, 1, 4, 9, 2),
    (8, 1, 2, 1, 2),
    (8, 1, 4, 2, 2),
    (8, 1, 4, 3, 2),
    (8, 1, 4, 4, 2),
    (8, 1, 4, 5, 2),
    (8, 1, 4, 6, 2),
    (8, 1, 4, 7, 2),
    (8, 1, 4, 8, 2),
    (8, 1, 4, 9, 2),
    (9, 1, 2, 1, 2),
    (9, 1, 4, 2, 2),
    (9, 1, 4, 3, 2),
    (9, 1, 4, 4, 2),
    (9, 1, 4, 5, 2),
    (9, 1, 4, 6, 2),
    (10, 1, 4, 10, 2),
    (10, 1, 4, 11, 2),
    (10, 1, 4, 12, 2),
    (10, 1, 4, 13, 2),
    (10, 1, 4, 14, 2),
    (10, 1, 4, 15, 2),
    (10, 1, 4, 16, 2),
    (10, 1, 4, 17, 2),
    (10, 1, 4, 18, 2),
    (10, 1, 4, 19, 2),
    (10, 1, 4, 20, 2),
    (10, 1, 4, 21, 2),
    (10, 1, 4, 22, 2),
    (10, 1, 4, 23, 2),
    (10, 1, 4, 24, 2),
    (10, 1, 4, 25, 2),
    (10, 1, 4, 26, 2),
    (10, 1, 4, 27, 2),
    (10, 1, 4, 28, 2),
    (10, 1, 4, 29, 2),
    (10, 1, 4, 30, 2),
    (10, 1, 4, 31, 2),
    (10, 1, 4, 32, 2),
    (10, 1, 4, 33, 2),
    (10, 1, 4, 34, 2),
    (10, 1, 4, 35, 2),
    (10, 1, 4, 36, 2),
    (11, 1, 4, 10, 2),
    (11, 1, 4, 11, 2),
    (11, 1, 4, 12, 2),
    (11, 1, 4, 13, 2),
    (11, 1, 4, 14, 2),
    (11, 1, 4, 15, 2),
    (11, 1, 4, 16, 2),
    (11, 1, 4, 17, 2),
    (11, 1, 4, 18, 2),
    (11, 1, 4, 19, 2),
    (11, 1, 4, 20, 2),
    (11, 1, 4, 21, 2),
    (11, 1, 4, 22, 2),
    (11, 1, 4, 23, 2),
    (11, 1, 4, 24, 2),
    (11, 1, 4, 25, 2),
    (11, 1, 4, 26, 2),
    (11, 1, 4, 27, 2),
    (11, 1, 4, 28, 2),
    (11, 1, 4, 29, 2),
    (11, 1, 4, 30, 2),
    (11, 1, 4, 31, 2),
    (11, 1, 4, 32, 2),
    (11, 1, 4, 33, 2),
    (11, 1, 4, 34, 2),
    (11, 1, 4, 35, 2),
    (11, 1, 4, 36, 2),
    (12, 1, 4, 10, 2),
    (13, 1, 4, 11, 2),
    (14, 1, 2, 1, 2),
    (15, 1, 2, 1, 2),
    (16, 1, 2, 1, 2),
    (17, 1, 2, 1, 2),
    (18, 1, 2, 1, 2),
    (19, 1, 5, 10, 2),
    (19, 1, 5, 11, 2),
    (20, 1, 5, 10, 2),
    (21, 1, 2, 1, 2),
    (21, 1, 4, 2, 2),
    (21, 1, 4, 3, 2),
    (9, 1, 9, 4, 4),
    (9, 1, 9, 5, 4),
    (9, 1, 9, 6, 4),
    (9, 1, 9, 9, 4),
    (6, 1, 9, 4, 4),
    (6, 1, 9, 5, 4),
    (6, 1, 9, 6, 4),
    (6, 1, 9, 9, 4),
    (5, 1, 9, 4, 4),
    (5, 1, 9, 5, 4),
    (5, 1, 9, 6, 4),
    (5, 1, 9, 9, 4),
    (22, 1, 9, 4, 4),
    (22, 1, 9, 5, 4),
    (22, 1, 9, 9, 4),
    (23, 1, 9, 4, 4),
    (23, 1, 9, 5, 4),
    (23, 1, 9, 6, 4),
    (23, 1, 9, 9, 4),
    (24, 1, 9, 4, 4),
    (24, 1, 9, 5, 4),
    (24, 1, 9, 6, 4),
    (24, 1, 9, 9, 4),
    (25, 1, 9, 4, 4),
    (25, 1, 9, 5, 4),
    (25, 1, 9, 6, 4),
    (25, 1, 9, 9, 4),
    (26, 1, 9, 4, 4),
    (26, 1, 9, 5, 4),
    (26, 1, 9, 6, 4),
    (26, 1, 9, 9, 4),
    (27, 1, 9, 4, 4),
    (27, 1, 9, 5, 4),
    (27, 1, 9, 9, 4),
    (28, 1, 9, 4, 4),
    (28, 1, 9, 5, 4),
    (28, 1, 9, 6, 4),
    (28, 1, 9, 9, 4);

INSERT INTO
    PlumPipeInfo (
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