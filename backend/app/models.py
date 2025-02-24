from pydantic import BaseModel
from typing import Optional

class CRMData(BaseModel):
    name: str
    email: Optional[str] = None
    phone: Optional[str] = None
    feedback: Optional[str] = None