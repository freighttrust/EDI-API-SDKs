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
import io.swagger.client.model.EdiFabricCoreModelEdiEdifactS004;
import io.swagger.client.model.EdiFabricCoreModelEdiEdifactS006;
import io.swagger.client.model.EdiFabricCoreModelEdiEdifactS007;
import io.swagger.client.model.EdiFabricCoreModelEdiEdifactS008;
import java.io.IOException;

/**
 * EdiFabricCoreModelEdiEdifactUNG
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-24T17:09:45.649Z")
public class EdiFabricCoreModelEdiEdifactUNG {
  @SerializedName("messageGroupIdentification_1")
  private String messageGroupIdentification1 = null;

  @SerializedName("applicationsenderidentificatioN_2")
  private EdiFabricCoreModelEdiEdifactS006 applicationsenderidentificatioN2 = null;

  @SerializedName("applicationrecipientidentificatioN_3")
  private EdiFabricCoreModelEdiEdifactS007 applicationrecipientidentificatioN3 = null;

  @SerializedName("dateandtimeofpreparatioN_4")
  private EdiFabricCoreModelEdiEdifactS004 dateandtimeofpreparatioN4 = null;

  @SerializedName("groupReferenceNumber_5")
  private String groupReferenceNumber5 = null;

  @SerializedName("controllingAgency_6")
  private String controllingAgency6 = null;

  @SerializedName("messageversioN_7")
  private EdiFabricCoreModelEdiEdifactS008 messageversioN7 = null;

  @SerializedName("d_ApplicationPassword_8")
  private String dApplicationPassword8 = null;

  public EdiFabricCoreModelEdiEdifactUNG messageGroupIdentification1(String messageGroupIdentification1) {
    this.messageGroupIdentification1 = messageGroupIdentification1;
    return this;
  }

   /**
   * Get messageGroupIdentification1
   * @return messageGroupIdentification1
  **/
  @ApiModelProperty(value = "")
  public String getMessageGroupIdentification1() {
    return messageGroupIdentification1;
  }

  public void setMessageGroupIdentification1(String messageGroupIdentification1) {
    this.messageGroupIdentification1 = messageGroupIdentification1;
  }

  public EdiFabricCoreModelEdiEdifactUNG applicationsenderidentificatioN2(EdiFabricCoreModelEdiEdifactS006 applicationsenderidentificatioN2) {
    this.applicationsenderidentificatioN2 = applicationsenderidentificatioN2;
    return this;
  }

   /**
   * Get applicationsenderidentificatioN2
   * @return applicationsenderidentificatioN2
  **/
  @ApiModelProperty(value = "")
  public EdiFabricCoreModelEdiEdifactS006 getApplicationsenderidentificatioN2() {
    return applicationsenderidentificatioN2;
  }

  public void setApplicationsenderidentificatioN2(EdiFabricCoreModelEdiEdifactS006 applicationsenderidentificatioN2) {
    this.applicationsenderidentificatioN2 = applicationsenderidentificatioN2;
  }

  public EdiFabricCoreModelEdiEdifactUNG applicationrecipientidentificatioN3(EdiFabricCoreModelEdiEdifactS007 applicationrecipientidentificatioN3) {
    this.applicationrecipientidentificatioN3 = applicationrecipientidentificatioN3;
    return this;
  }

   /**
   * Get applicationrecipientidentificatioN3
   * @return applicationrecipientidentificatioN3
  **/
  @ApiModelProperty(value = "")
  public EdiFabricCoreModelEdiEdifactS007 getApplicationrecipientidentificatioN3() {
    return applicationrecipientidentificatioN3;
  }

  public void setApplicationrecipientidentificatioN3(EdiFabricCoreModelEdiEdifactS007 applicationrecipientidentificatioN3) {
    this.applicationrecipientidentificatioN3 = applicationrecipientidentificatioN3;
  }

  public EdiFabricCoreModelEdiEdifactUNG dateandtimeofpreparatioN4(EdiFabricCoreModelEdiEdifactS004 dateandtimeofpreparatioN4) {
    this.dateandtimeofpreparatioN4 = dateandtimeofpreparatioN4;
    return this;
  }

   /**
   * Get dateandtimeofpreparatioN4
   * @return dateandtimeofpreparatioN4
  **/
  @ApiModelProperty(value = "")
  public EdiFabricCoreModelEdiEdifactS004 getDateandtimeofpreparatioN4() {
    return dateandtimeofpreparatioN4;
  }

  public void setDateandtimeofpreparatioN4(EdiFabricCoreModelEdiEdifactS004 dateandtimeofpreparatioN4) {
    this.dateandtimeofpreparatioN4 = dateandtimeofpreparatioN4;
  }

  public EdiFabricCoreModelEdiEdifactUNG groupReferenceNumber5(String groupReferenceNumber5) {
    this.groupReferenceNumber5 = groupReferenceNumber5;
    return this;
  }

   /**
   * Get groupReferenceNumber5
   * @return groupReferenceNumber5
  **/
  @ApiModelProperty(value = "")
  public String getGroupReferenceNumber5() {
    return groupReferenceNumber5;
  }

  public void setGroupReferenceNumber5(String groupReferenceNumber5) {
    this.groupReferenceNumber5 = groupReferenceNumber5;
  }

  public EdiFabricCoreModelEdiEdifactUNG controllingAgency6(String controllingAgency6) {
    this.controllingAgency6 = controllingAgency6;
    return this;
  }

   /**
   * Get controllingAgency6
   * @return controllingAgency6
  **/
  @ApiModelProperty(value = "")
  public String getControllingAgency6() {
    return controllingAgency6;
  }

  public void setControllingAgency6(String controllingAgency6) {
    this.controllingAgency6 = controllingAgency6;
  }

  public EdiFabricCoreModelEdiEdifactUNG messageversioN7(EdiFabricCoreModelEdiEdifactS008 messageversioN7) {
    this.messageversioN7 = messageversioN7;
    return this;
  }

   /**
   * Get messageversioN7
   * @return messageversioN7
  **/
  @ApiModelProperty(value = "")
  public EdiFabricCoreModelEdiEdifactS008 getMessageversioN7() {
    return messageversioN7;
  }

  public void setMessageversioN7(EdiFabricCoreModelEdiEdifactS008 messageversioN7) {
    this.messageversioN7 = messageversioN7;
  }

  public EdiFabricCoreModelEdiEdifactUNG dApplicationPassword8(String dApplicationPassword8) {
    this.dApplicationPassword8 = dApplicationPassword8;
    return this;
  }

   /**
   * Get dApplicationPassword8
   * @return dApplicationPassword8
  **/
  @ApiModelProperty(value = "")
  public String getDApplicationPassword8() {
    return dApplicationPassword8;
  }

  public void setDApplicationPassword8(String dApplicationPassword8) {
    this.dApplicationPassword8 = dApplicationPassword8;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EdiFabricCoreModelEdiEdifactUNG ediFabricCoreModelEdiEdifactUNG = (EdiFabricCoreModelEdiEdifactUNG) o;
    return Objects.equals(this.messageGroupIdentification1, ediFabricCoreModelEdiEdifactUNG.messageGroupIdentification1) &&
        Objects.equals(this.applicationsenderidentificatioN2, ediFabricCoreModelEdiEdifactUNG.applicationsenderidentificatioN2) &&
        Objects.equals(this.applicationrecipientidentificatioN3, ediFabricCoreModelEdiEdifactUNG.applicationrecipientidentificatioN3) &&
        Objects.equals(this.dateandtimeofpreparatioN4, ediFabricCoreModelEdiEdifactUNG.dateandtimeofpreparatioN4) &&
        Objects.equals(this.groupReferenceNumber5, ediFabricCoreModelEdiEdifactUNG.groupReferenceNumber5) &&
        Objects.equals(this.controllingAgency6, ediFabricCoreModelEdiEdifactUNG.controllingAgency6) &&
        Objects.equals(this.messageversioN7, ediFabricCoreModelEdiEdifactUNG.messageversioN7) &&
        Objects.equals(this.dApplicationPassword8, ediFabricCoreModelEdiEdifactUNG.dApplicationPassword8);
  }

  @Override
  public int hashCode() {
    return Objects.hash(messageGroupIdentification1, applicationsenderidentificatioN2, applicationrecipientidentificatioN3, dateandtimeofpreparatioN4, groupReferenceNumber5, controllingAgency6, messageversioN7, dApplicationPassword8);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EdiFabricCoreModelEdiEdifactUNG {\n");
    
    sb.append("    messageGroupIdentification1: ").append(toIndentedString(messageGroupIdentification1)).append("\n");
    sb.append("    applicationsenderidentificatioN2: ").append(toIndentedString(applicationsenderidentificatioN2)).append("\n");
    sb.append("    applicationrecipientidentificatioN3: ").append(toIndentedString(applicationrecipientidentificatioN3)).append("\n");
    sb.append("    dateandtimeofpreparatioN4: ").append(toIndentedString(dateandtimeofpreparatioN4)).append("\n");
    sb.append("    groupReferenceNumber5: ").append(toIndentedString(groupReferenceNumber5)).append("\n");
    sb.append("    controllingAgency6: ").append(toIndentedString(controllingAgency6)).append("\n");
    sb.append("    messageversioN7: ").append(toIndentedString(messageversioN7)).append("\n");
    sb.append("    dApplicationPassword8: ").append(toIndentedString(dApplicationPassword8)).append("\n");
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

