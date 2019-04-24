/*
 * EdiFabric API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * EdiFabricCoreModelEdiEdifactUNZ
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-24T17:09:45.649Z")
public class EdiFabricCoreModelEdiEdifactUNZ {
  @SerializedName("interchangeControlCount_1")
  private String interchangeControlCount1 = null;

  @SerializedName("interchangeControlReference_2")
  private String interchangeControlReference2 = null;

  public EdiFabricCoreModelEdiEdifactUNZ interchangeControlCount1(String interchangeControlCount1) {
    this.interchangeControlCount1 = interchangeControlCount1;
    return this;
  }

   /**
   * Get interchangeControlCount1
   * @return interchangeControlCount1
  **/
  @ApiModelProperty(value = "")
  public String getInterchangeControlCount1() {
    return interchangeControlCount1;
  }

  public void setInterchangeControlCount1(String interchangeControlCount1) {
    this.interchangeControlCount1 = interchangeControlCount1;
  }

  public EdiFabricCoreModelEdiEdifactUNZ interchangeControlReference2(String interchangeControlReference2) {
    this.interchangeControlReference2 = interchangeControlReference2;
    return this;
  }

   /**
   * Get interchangeControlReference2
   * @return interchangeControlReference2
  **/
  @ApiModelProperty(value = "")
  public String getInterchangeControlReference2() {
    return interchangeControlReference2;
  }

  public void setInterchangeControlReference2(String interchangeControlReference2) {
    this.interchangeControlReference2 = interchangeControlReference2;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EdiFabricCoreModelEdiEdifactUNZ ediFabricCoreModelEdiEdifactUNZ = (EdiFabricCoreModelEdiEdifactUNZ) o;
    return Objects.equals(this.interchangeControlCount1, ediFabricCoreModelEdiEdifactUNZ.interchangeControlCount1) &&
        Objects.equals(this.interchangeControlReference2, ediFabricCoreModelEdiEdifactUNZ.interchangeControlReference2);
  }

  @Override
  public int hashCode() {
    return Objects.hash(interchangeControlCount1, interchangeControlReference2);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EdiFabricCoreModelEdiEdifactUNZ {\n");
    
    sb.append("    interchangeControlCount1: ").append(toIndentedString(interchangeControlCount1)).append("\n");
    sb.append("    interchangeControlReference2: ").append(toIndentedString(interchangeControlReference2)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
