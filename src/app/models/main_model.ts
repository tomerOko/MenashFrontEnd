class login_status{
  status: string;
  authenticated: true;
}

class apartment_post{
  startYear: number;
  endYear: number;
  apartamentText: string;
  rank: number;
  rentCost:number;
  heshbonot: number;
}

class building_post{
  startYear:number;
  endYear:number;
  levelOfStudents:number;
  buildingText:string;
  buildingRank:number;
}

class Street{
  Id:string;
  streetName:string;
}

export {login_status, Street, apartment_post, building_post, }
