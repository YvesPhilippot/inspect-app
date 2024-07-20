import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('sfng.db');

export interface Vehicle {
  Id : number,
  VIN : string,
  RegistrationNumber : string,
  OdometerValue : string
}

export interface Stakeholder {
  Id : number,
  FirstName : string,
  LastName : string,
  Type : string
}

export const initializeDatabase = async () => {
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS Vehicles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        VIN TEXT,
        RegistrationNumber TEXT,
        OdometerValue TEXT
      );
      
       CREATE TABLE IF NOT EXISTS Stakeholders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        FirstName TEXT,
        LastName TEXT,
        Type TEXT
      );

      CREATE TABLE IF NOT EXISTS Inspections (
        InspectionId INTEGER PRIMARY KEY AUTOINCREMENT,
        VehicleTechnicalId INTEGER NOT NULL,
        DriverTechnicalId INTEGER NOT NULL,
        InspectorTechnicalId INTEGER NOT NULL,
        InspectionDate DATE,
        Result TEXT,
        FOREIGN KEY (VehicleTechnicalId) REFERENCES Vehicles(id),
        FOREIGN KEY (DriverTechnicalId) REFERENCES Stakeholders(id),
        FOREIGN KEY (InspectorTechnicalId) REFERENCES Stakeholders(id)
      );
      
      INSERT INTO Vehicles (VIN, RegistrationNumber, OdometerValue) 
      VALUES ('5J8TB18228A801930', 'AA-123-BB', '13000');
      
      INSERT INTO Stakeholders (FirstName, LastName, Type) 
      VALUES ('Yves', 'Philippot', 'Inspector');
      
      INSERT INTO Stakeholders (FirstName, LastName, Type) 
      VALUES ('Coline', 'Bourdeau', 'Driver');
      
      `
    );   

};

export const addInspections = async (vehicleTechnicalId: number, driverTechnicalId: number, inspectorTechnicalId: number, inspectionDate : Date, result: string) => {
  return await db.runAsync(
      'INSERT INTO inspections (VehicleTechnicalId, DriverTechnicalId, InspectorTechnicalId, InspectionDate, Result) VALUES (?, ?, ?, ?, ?);',
      [vehicleTechnicalId, driverTechnicalId, inspectorTechnicalId, inspectionDate.toISOString(), result]
    );
};

export const getVehicles = async ()  => {
    return await db.getAllAsync(  
      'SELECT * FROM Vehicles;'      
    );
};

export const getStakholder = async ()  => {
  return await db.getAllAsync(  
    'SELECT * FROM Stakeholders;'      
  );
};

export const getInspector = async ()  => {
  return await db.getFirstAsync<Stakeholder>(  
    'SELECT * FROM Stakeholders Where Type = "Inspector";'      
  );
};

export const getVehicleByVin = async (vin : string) => {
  return await db.getFirstSync<Vehicle>(  
    'SELECT * FROM Vehicles Where Vin = ?;',
    [vin]      
  );
}



export const deleteAll = async () => {
    return await db.runAsync(    
      'DELETE FROM Inspections;'
    );

};