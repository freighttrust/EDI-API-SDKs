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
 * EdiFabricCoreModelEdiEdifactS006
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-24T17:09:45.649Z")
public class EdiFabricCoreModelEdiEdifactS006 {
  @SerializedName("applicationSenderIdentification_1")
  private String applicationSenderIdentification1 = null;

  @SerializedName("identificationCodeQualifier_2")
  private String identificationCodeQualifier2 = null;

  public EdiFabricCoreModelEdiEdifactS006 applicationSenderIdentification1(String applicationSenderIdentification1) {
    this.applicationSenderIdentification1 = applicationSenderIdentification1;
    return this;
  }

   /**
   * Get applicationSenderIdentification1
   * @return applicationSenderIdentification1
  **/
  @ApiModelProperty(value = "")
  public String getApplicationSenderIdentification1() {
    return applicationSenderIdentification1;
  }

  public void setApplicationSenderIdentification1(String applicationSenderIdentification1) {
    this.applicationSenderIdentification1 = applicationSenderIdentification1;
  }

  public EdiFabricCoreModelEdiEdifactS006 identificationCodeQualifier2(String identificationCodeQualifier2) {
    this.identificationCodeQualifier2 = identificationCodeQualifier2;
    return this;
  }

   /**
   * Get identificationCodeQualifier2
   * @return identificationCodeQualifier2
  **/
  @ApiModelProperty(value = "")
  public String getIdentificationCodeQualifier2() {
    return identificationCodeQualifier2;
  }

  public void setIdentificationCodeQualifier2(String identificationCodeQualifier2) {
    this.identificationCodeQualifier2 = identificationCodeQualifier2;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EdiFabricCoreModelEdiEdifactS006 ediFabricCoreModelEdiEdifactS006 = (EdiFabricCoreModelEdiEdifactS006) o;
    return Objects.equals(this.applicationSenderIdentification1, ediFabricCoreModelEdiEdifactS006.applicationSenderIdentification1) &&
        Objects.equals(this.identificationCodeQualifier2, ediFabricCoreModelEdiEdifactS006.identificationCodeQualifier2);
  }

  @Override
  public int hashCode() {
    return Objects.hash(applicationSenderIdentification1, identificationCodeQualifier2);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EdiFabricCoreModelEdiEdifactS006 {\n");
    
    sb.append("    applicationSenderIdentification1: ").append(toIndentedString(applicationSenderIdentification1)).append("\n");
    sb.append("    identificationCodeQualifier2: ").append(toIndentedString(identificationCodeQualifier2)).append("\n");
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
