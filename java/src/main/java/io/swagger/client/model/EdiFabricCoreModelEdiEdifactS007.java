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
 * EdiFabricCoreModelEdiEdifactS007
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-24T17:09:45.649Z")
public class EdiFabricCoreModelEdiEdifactS007 {
  @SerializedName("applicationRecipientIdentification_1")
  private String applicationRecipientIdentification1 = null;

  @SerializedName("identificationCodeQualifier_2")
  private String identificationCodeQualifier2 = null;

  public EdiFabricCoreModelEdiEdifactS007 applicationRecipientIdentification1(String applicationRecipientIdentification1) {
    this.applicationRecipientIdentification1 = applicationRecipientIdentification1;
    return this;
  }

   /**
   * Get applicationRecipientIdentification1
   * @return applicationRecipientIdentification1
  **/
  @ApiModelProperty(value = "")
  public String getApplicationRecipientIdentification1() {
    return applicationRecipientIdentification1;
  }

  public void setApplicationRecipientIdentification1(String applicationRecipientIdentification1) {
    this.applicationRecipientIdentification1 = applicationRecipientIdentification1;
  }

  public EdiFabricCoreModelEdiEdifactS007 identificationCodeQualifier2(String identificationCodeQualifier2) {
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
    EdiFabricCoreModelEdiEdifactS007 ediFabricCoreModelEdiEdifactS007 = (EdiFabricCoreModelEdiEdifactS007) o;
    return Objects.equals(this.applicationRecipientIdentification1, ediFabricCoreModelEdiEdifactS007.applicationRecipientIdentification1) &&
        Objects.equals(this.identificationCodeQualifier2, ediFabricCoreModelEdiEdifactS007.identificationCodeQualifier2);
  }

  @Override
  public int hashCode() {
    return Objects.hash(applicationRecipientIdentification1, identificationCodeQualifier2);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EdiFabricCoreModelEdiEdifactS007 {\n");
    
    sb.append("    applicationRecipientIdentification1: ").append(toIndentedString(applicationRecipientIdentification1)).append("\n");
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
